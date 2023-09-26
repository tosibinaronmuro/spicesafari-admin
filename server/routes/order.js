import { Router } from "express";
import {
  viewAllOrders,
  userOrders,
  singleOrder,
  createOrder,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = Router();

router.get("/", viewAllOrders);
router.get("/:id", singleOrder);
router.get("userOrder", userOrders);
router.post("/createOrder", createOrder);
router.patch("/:id", updateOrderStatus);

export default router;
