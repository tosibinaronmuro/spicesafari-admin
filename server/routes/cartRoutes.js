import { Router } from "express";
import {
  IncreaseQuantity,
  addToCart,
  decreaseQuantity,
  removeCartItem,
  viewUserCart,
} from "../controllers/cartController.js";
const router = Router();

router.get("/view", viewUserCart);
router.post("/create/:productId", addToCart);
router.patch("/increase/:userId/:productId", IncreaseQuantity);
router.patch("/decrease/:userId/:productId", decreaseQuantity);
router.delete("/delete/:userId/:productId", removeCartItem);
export default router;
