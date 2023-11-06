import cart from "../model/cartModel.js";
import products from "../model/productModel.js";

const calculateCartTotal = (items) => {
  let total = 0;
  items.forEach((item) => {
    const { price, quantity } = item;
    total += price * quantity;
  });

  return total;
};
//view user cart
export const viewUserCart = async (req, res) => {
  try {
    const { userId } = req.query;
    const viewCart = await cart.find({ user: userId }).populate({
      path: "items.product",
    });
    res.status(200).json(viewCart);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// Add to Cart
export const addToCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const { user, price, quantity } = req.body;

    // Check if the product exists
    const product = await products.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Check if the user's cart exists, or create one if it doesn't
    let userCart = await cart.findOne({ user }).populate({
      path: "items.product",
    });

    if (!userCart) {
      userCart = new cart({
        user,
        items: [],
        total: 0,
      });
    }

    // Check if the product is already in the user's cart
    const cartItemIndex = userCart.items.findIndex(
      (item) => item.product._id.toString() === productId,
    );

    if (cartItemIndex !== -1) {
      // Update the quantity of the existing product in the cart
      userCart.items[cartItemIndex].quantity += 1;
    } else {
      // Add the product to the cart with the given quantity
      userCart.items.push({
        product: productId,
        image: product.image,
        price: product.price,
      });
    }

    // Recalculate the total price of the cart
    console.log("toal:", userCart.total);
    userCart.total = calculateCartTotal(userCart.items);
    console.log("toal after:", userCart.total);
    console.log(userCart.items);
    // Save the updated cart
    await userCart.save();
    console.log(userCart);
    res.status(201).json(userCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Increase Product Quantity
export const IncreaseQuantity = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    // const { quantity } = req.body;

    // Find the user's cart
    let userCart = await cart.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Find the cart item with the matching product ID
    const cartItem = userCart.items.find(
      (item) => item.product.toString() === productId,
    );

    if (!cartItem) {
      return res.status(404).json({ error: "Product not found in the cart" });
    }

    // Update the quantity of the cart item
    cartItem.quantity += 1;

    // Recalculate the total price of the cart
    userCart.total = calculateCartTotal(userCart.items);

    // Save the updated cart
    await userCart.save();

    res.status(200).json(userCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Reduce Product Quantity
export const decreaseQuantity = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    // const { quantity } = req.body;

    // Find the user's cart
    let userCart = await cart.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Find the cart item with the matching product ID
    const cartItem = userCart.items.find(
      (item) => item.product.toString() === productId,
    );

    if (!cartItem) {
      return res.status(404).json({ error: "Product not found in the cart" });
    }

    // Update the quantity of the cart item
    cartItem.quantity -= 1;

    // Recalculate the total price of the cart
    userCart.total = calculateCartTotal(userCart.items);

    // Save the updated cart
    await userCart.save();

    res.status(200).json(userCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeCartItem = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    // Find the user's cart
    let userCart = await Cart.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Find the index of the cart item with the matching product ID
    const cartItemIndex = userCart.items.findIndex(
      (item) => item.product.toString() === productId,
    );

    if (cartItemIndex === -1) {
      return res.status(404).json({ error: "Product not found in the cart" });
    }

    // Remove the cart item from the array
    userCart.items.splice(cartItemIndex, 1);

    // Recalculate the total price of the cart
    userCart.total = calculateCartTotal(userCart.items);

    // Save the updated cart
    await userCart.save();

    res.status(200).json(userCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
