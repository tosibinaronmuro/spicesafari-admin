import { Router } from "express";
import {
  createProduct,
  singleProduct,
  updateProduct,
  viewProduct,
  wishlistProduct,
} from "../controllers/productController.js";
import adminauthMiddleware from "../middleware/adminauth.js";
import authMiddleware from '../middleware/auth.js';
const router = Router();

router.get("/", viewProduct);//everyone can view products even before they create accounts
router.get("/:id", singleProduct);//everyone can view a single product even before they create accounts
router.get("/recommend/:UserId", viewProduct);//everyone can be recommended products even before they create accounts
router.post("/:userId/wishlist/:productId", authMiddleware,wishlistProduct);// only users who have created an account can create a wishlist 
router.post("/create", adminauthMiddleware,createProduct);// only admins can create a new product
router.patch("/:id",adminauthMiddleware, updateProduct);//only admins can update a product

export default router;
