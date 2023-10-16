import {
  recommendProducts,
  recommendProductsForUser,
} from "../middleware/collaborationFiltering.js";
import products from "../model/productModel.js";
import User from "../model/user.js";

//View all products
export const viewProduct = async (req, res) => {
  try {
    const allProducts = await products.find();
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
      };
    });
    res.status(200).json(refreshedProducts);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//View single products
export const singleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const viewSingleProduct = await products.findById(id);
    const refreshedProducts = allProducts.map((newProduct) => {
      //
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
      };
    });
    res.status(200).jsson(refreshedProducts);
    res.status(200).json(viewSingleProduct);
  } catch (err) {
    res.status(500).jsson(err.message);
  }
};
//View recommended products
export const recommendProduct = async (req, res) => {
  try {
    const { userId } = req.params;
    const recommendation = await recommendProductsForUser(userId, 5);
    res.status(200).json(recommendation);
  } catch (err) {
    res.status(500).jsson(err.message);
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
    res.status(500).jsson(err.message);
  }
};

//create new products
export const createProduct = async (req, res) => {
  const { title, price, image, otherImages, description, category } = req.body;
  // Validating product details
  if (!title || !price || !image || !otherImages || !description || !category) {
    return res.status(401).json("Fields must not be empty");
  }
  try {
    const createdProduct = new products({
      title,
      price,
      image,
      otherImages,
      description,
      category,
    });
    const newProduct = await createdProduct.save();
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).jsson(err.message);
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
    res.status(500).jsson(err.message);
  }
};
//Update existing products details
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await products.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).jsson(err.message);
  }
};
//Delete a  products
export const deleteProduct = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).jsson(err.message);
  }
};
