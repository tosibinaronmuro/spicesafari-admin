// Function to recommend products for a user
export const recommendProducts = async (userId) => {
  // Find the user by ID
  const user = await User.findById(userId).populate("wishlist");

  // Extract product IDs from the user's wishlist
  const wishlistProductIds = user.wishlist.map((product) => product._id);

  // Find orders for the user
  const userOrders = await Order.find({ user: userId });

  // Extract product IDs from the user's orders
  const orderedProductIds = userOrders.map((order) => order.product);

  // Find products that other users have ordered and the user hasn't
  const recommendedProducts = await Product.find({
    _id: { $nin: wishlistProductIds.concat(orderedProductIds) },
  }).limit(10); // Limit to the top 10 recommendations

  return recommendedProducts;
};
