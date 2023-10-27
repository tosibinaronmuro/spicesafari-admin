import { Router } from "express";
import {
  viewAllOrders,
  userOrders,
  singleOrder,
  createOrder,
  updateOrderStatus,
} from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";
import adminauthMiddleware from "../middleware/adminauth.js";
const router = Router();

router.get("/", viewAllOrders); // admins can view all users orders hence the admin auth middleware
router.get("/:id", adminauthMiddleware, singleOrder); // admins can view a single order hence the admin auth middleware
router.get("/users/:userId", userOrders); // users can view all their orders
router.post("/createOrder",authMiddleware, createOrder); //users can create an order hence user auth ...
router.patch("/:id", adminauthMiddleware, updateOrderStatus); // admins can change status hence the admin auth middleware
router.patch("/user/:id", authMiddleware, updateOrderStatus); // admins can change status hence the admin auth middleware
// users can cancel orders
export default router;
