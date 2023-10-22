import products from "../model/productModel.js";
import Orders from "../model/orderModel.js";

// Function to recommend products to a user based on collaborative filtering
export const recommendProductsForUser = async (userId, limit) => {
  // Find the orders made by the user
  const userOrders = await Orders.find({ userId }).populate("products").exec();

  // Create a user-product matrix to track user interactions
  const userProductMatrix = {};

  for (const order of userOrders) {
    for (const product of order.products) {
      userProductMatrix[product._id] = userProductMatrix[product._id] || {};
      userProductMatrix[product._id][userId] = order.quantity;
    }
  }

  // Find similar users using collaborative filtering
  const similarUsers = {};
  for (const productId in userProductMatrix) {
    for (const userId in userProductMatrix[productId]) {
      if (!similarUsers[userId]) {
        similarUsers[userId] = {};
      }
      for (const otherUserId in userProductMatrix[productId]) {
        if (userId !== otherUserId) {
          similarUsers[userId][otherUserId] =
            (similarUsers[userId][otherUserId] || 0) + 1;
        }
      }
    }
  }

  // Find products that the user's similar users have purchased
  const recommendedProductIds = [];
  for (const similarUserId in similarUsers[userId]) {
    const similarUserOrders = await Orders.find({
      userId: similarUserId,
    }).populate("products");
    for (const order of similarUserOrders) {
      for (const product of order.products) {
        if (!userProductMatrix[product._id][userId]) {
          recommendedProductIds.push(product._id);
        }
      }
    }
  }

  // Count the frequency of each recommended product
  const productFrequency = {};
  for (const productId of recommendedProductIds) {
    productFrequency[productId] = (productFrequency[productId] || 0) + 1;
  }

  // Sort recommended products by frequency and limit the result
  const sortedProductIds = Object.keys(productFrequency).sort(
    (a, b) => productFrequency[b] - productFrequency[a],
  );

  const recommendedProducts = await products
    .find({
      _id: { $in: sortedProductIds },
    })
    .limit(limit);

  return recommendedProducts;
};

// Example usage:
// const recommendedProducts = recommendProductsForUser("userId", 5);
// console.log("Recommended Products:", recommendedProducts);
