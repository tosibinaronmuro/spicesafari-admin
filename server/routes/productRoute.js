import { Router } from "express";
import {
  createProduct,
  singleProduct,
  updateProduct,
  viewProduct,
  wishlistProduct,
} from "../controllers/productController.js";

const router = Router();

router.get("/", viewProduct);
router.get("/:id", singleProduct);
router.get("/recommend/:id", viewProduct);
router.post("/:userId/wishlist/:productId", wishlistProduct);
router.post("/create", createProduct);
router.patch("/:id", updateProduct);

export default router;
