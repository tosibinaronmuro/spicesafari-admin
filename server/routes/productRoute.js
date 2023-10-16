import { Router } from "express";
import {
  createProduct,
  singleProduct,
  updateProduct,
  viewProduct,
  wishlistProduct,
} from "../controllers/productController.js";
// import products from "../model/productModel.js";

const router = Router();

router.get("/", viewProduct);
router.get("/:id", singleProduct);
router.get("/recommend/:id", viewProduct);

router.post("/create", createProduct);
router.patch("/:userId/wishlist/:productId", wishlistProduct);
// router.post("/createMany", async (req, res) => {
//   const prod = [
//     {
//       title: "Laptop",
//       price: 999.99,
//       image: "laptop.jpg",
//       otherImages: ["laptop-side.jpg", "laptop-keyboard.jpg"],
//       description: "A powerful laptop for all your computing needs.",
//       category: "5f4e12c32a0a1b3c45d8e7a1", // Replace with an actual category ID
//       rating: [4.5, 4.0, 4.8],
//     },
//     {
//       title: "Smartphone",
//       price: 499.99,
//       image: "smartphone.jpg",
//       otherImages: ["smartphone-back.jpg", "smartphone-screen.jpg"],
//       description: "A feature-rich smartphone for staying connected.",
//       category: "5f4e12c32a0a1b3c45d8e7a2", // Replace with an actual category ID
//       rating: [4.2, 3.0, 3.9],
//     },
//     {
//       title: "Headphones",
//       price: 149.99,
//       image: "headphones.jpg",
//       otherImages: ["headphones-side.jpg", "headphones-wireless.jpg"],
//       description: "High-quality headphones for immersive audio experience.",
//       category: "5f4e12c32a0a1b3c45d8e7a3", // Replace with an actual category ID
//       rating: [4.8, 4.7, 4.9],
//     },
//   ];

//   // You can then insert these sample products into your MongoDB database using the "products" model.

//   const produc = await products.insertMany(prod);

//   res.status(200).json(products);
// });
router.patch("/:id", updateProduct);

export default router;
