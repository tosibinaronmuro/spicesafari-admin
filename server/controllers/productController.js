import products from "../model/productModel.js";
import User from "../model/user.js";

//View all products
export const viewProduct = async (req, res) => {
  try {
    let allProducts;
    const { key } = req.query;

    !key
      ? (allProducts = await products.find().sort({ createdAt: -1 }))
      : (allProducts = await products
          .find({
            $or: [{ title: { $regex: key, $options: "i" } }],
          })
          .sort({ createdAt: -1 }));
    //Calculate the average rating for all products
    const refreshedProducts = allProducts.map((newProduct) => {
      const ratingLenght = newProduct.rating.length;
      let averageRating = 0;
      if (ratingLenght > 0) {
        const totalRating = newProduct.rating.reduce(
          (rating, total) => rating + total,
          0,
        );
        averageRating = totalRating / ratingLenght;
      }
      return {
        _id: newProduct._id,
        title: newProduct.title,
        price: newProduct.price,
        description: newProduct.description,
        category: newProduct.category,
        image: newProduct.image,
        otherImages: newProduct.otherImages,
        rating: averageRating,
        createdAt: newProduct.createdAt,
      };
    });
    res.status(200).json(refreshedProducts);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Search for products
// export const searchProducts = async (req, res) => {
//   try {
//     const { key } = req.query;

//     const searchedProd = await products.find({
//       $or: [
//         { title: { $regex: key, $options: "i" } },
//         // { category: { $regex: search, $options: "i" } },
//       ],
//     });

//     const refreshedProducts = searchedProd.map((newProduct) => {
//       const ratingLenght = newProduct.rating.length;
//       let averageRating = 0;
//       if (ratingLenght > 0) {
//         const totalRating = newProduct.rating.reduce(
//           (rating, total) => rating + total,
//           0,
//         );
//         averageRating = totalRating / ratingLenght;
//       }
//       return {
//         _id: newProduct._id,
//         title: newProduct.title,
//         price: newProduct.price,
//         description: newProduct.description,
//         category: newProduct.category,
//         image: newProduct.image,
//         otherImages: newProduct.otherImages,
//         rating: averageRating,
//         createdAt: newProduct.createdAt,
//       };
//     });
//     res.status(200).json(refreshedProducts);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };
//View single products
export const singleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const viewSingleProduct = await products.findById(id);
    const ratingLenght = viewSingleProduct?.rating?.length;
    let averageRating = 0;
    if (ratingLenght > 0) {
      const totalRating = viewSingleProduct.rating.reduce(
        (rating, total) => rating + total,
        0,
      );
      averageRating = totalRating / ratingLenght;
    }
    res.status(200).json({
      _id: viewSingleProduct._id,
      title: viewSingleProduct.title,
      price: viewSingleProduct.price,
      description: viewSingleProduct.description,
      category: viewSingleProduct.category,
      image: viewSingleProduct.image,
      otherImages: viewSingleProduct.otherImages,
      rating: averageRating,
      createdAt: viewSingleProduct.createdAt,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
//View recommended products
export const recommendProduct = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById({ _id: userId })
      .populate("wishlist")
      .exec();
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // find all users except the current user
    const otherUsers = await User.find({ _id: { $ne: userId } });

    const calculateUserSimilarity = (user1, user2) => {
      const wishlist1 = new Set(
        user1.wishlist.map((food) => food._id.toString()),
      );
      const wishlist2 = new Set(
        user2.wishlist.map((food) => food._id.toString()),
      );

      const intersection = [...wishlist1].filter((foodId) =>
        wishlist2.has(foodId),
      );

      if (intersection.length === 0) {
        return 0; // No similarity
      }

      const union = new Set([...wishlist1, ...wishlist2]);

      return intersection.length / union.size;
    };

    const userSimilarities = [];

    otherUsers.forEach((otherUser) => {
      const similarity = calculateUserSimilarity(user, otherUser);
      userSimilarities.push({ userId: otherUser._id, similarity });
    });

    userSimilarities.sort((a, b) => b.similarity - a.similarity);

    const topSimilarUser = userSimilarities[0];

    if (!topSimilarUser) {
      return res.json({ message: "No recommendations available" });
    }

    const recommendedUser = await User.findById(topSimilarUser.userId).populate(
      "wishlist",
    );

    const recommendedFoods = recommendedUser.wishlist.map((food) => food._id);

    const recommendations = recommendedFoods.filter(
      (foodId) => !user.wishlist.map((food) => food._id).includes(foodId),
    );

    const recommendedFoodDetails = await products.find({
      _id: { $in: recommendations },
    });
    const refreshedProducts = recommendedFoodDetails.map((newProduct) => {
      const ratingLenght = newProduct.rating.length;
      let averageRating = 0;
      if (ratingLenght > 0) {
        const totalRating = newProduct.rating.reduce(
          (rating, total) => rating + total,
          0,
        );
        averageRating = totalRating / ratingLenght;
      }
      return {
        _id: newProduct._id,
        title: newProduct.title,
        price: newProduct.price,
        description: newProduct.description,
        category: newProduct.category,
        image: newProduct.image,
        otherImages: newProduct.otherImages,
        rating: averageRating,
        createdAt: newProduct.createdAt,
      };
    });
    res.status(200).json(refreshedProducts);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//Adding products to wishlist
export const wishlistProduct = async (req, res) => {
  const { userId } = req.params;
  const { productId } = req.params;
  try {
    const product = await products.findById(productId);
    const currentUser = await User.findById(userId);
    if (!product) {
      return res.status(404).json("No user or product found");
    }
    // If the product already exists in the wishlist and you fire the enpoint it will be remove
    // But if the product doesnt exists it will be added to the wishlist.
    const isWishlistProduct = currentUser.wishlist.includes(productId);
    if (isWishlistProduct) {
      await User.findByIdAndUpdate(userId, {
        $pull: { wishlist: productId },
      });
      res.status(200).json("Product removed from wishlist");
    } else {
      await User.findByIdAndUpdate(userId, {
        $push: { wishlist: productId },
      });
      res.status(200).json("Product added to wishlist");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//create new products
export const createProduct = async (req, res) => {
  try {
    const { title, price, description, category } = req.body;
    // Validating product details
    if (!title || !price || !description || !category) {
      return res.status(401).json("Fields must not be empty");
    }
    if (!req.file) {
      return res.status(401).json("Select Image");
    }
    const createdProduct = new products({
      title,
      price,
      image: req.file.filename,
      description,
      category,
    });
    const newProduct = await createdProduct.save();
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// add rating to any product
export const updateProductRatings = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;
    const product = await products.findById(id);
    if (!product) {
      return res.status(404).json("No product found!");
    }
    product.rating.push(rating);

    await product.save();
    res.status(200).json(product);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
//Update existing products details
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, otherImages, description, category } = req.body;
    const seenProduct = {
      title,
      price,
      otherImages,
      description,
      category,
    };

    if (req.file) {
      seenProduct.image = req.file.filename;
    }
    const updatedProduct = await products.findByIdAndUpdate(
      id,
      {
        $set: seenProduct,
      },
      { new: true },
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
//Delete a  product
export const deleteProduct = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err.message);
  }
};
