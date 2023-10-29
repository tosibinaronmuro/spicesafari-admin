import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  recommendProduct,
  singleProduct,
  updateProduct,
  viewProduct,
  wishlistProduct,
} from "../controllers/productController.js";
import adminauthMiddleware from "../middleware/adminauth.js";
import authMiddleware from "../middleware/auth.js";
import multer from "multer";
import { storage } from "../middleware/fileUpload.js";
const router = Router();

const upload = multer({ storage: storage });
router.get("/", viewProduct); //everyone can view products even before they create accounts
// router.get("/search", searchProducts);
router.get("/:id", singleProduct); //everyone can view a single product even before they create accounts
router.delete("/:id", deleteProduct); //everyone can view a single product even before they create accounts
router.get("/recommend/:userId", recommendProduct); //everyone can be recommended products even before they create accounts

router.post(
  "/create",
  upload.single("photo"),

  createProduct,
); // only admins can create a new product
router.patch(
  "/:id",
  upload.single("photo"),

  updateProduct,
); //only admins can update a product
router.patch("/:userId/wishlist/:productId", wishlistProduct); // only users who have created an account can create a wishlist
export default router;
