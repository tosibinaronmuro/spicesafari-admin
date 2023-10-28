import express from "express";
const router = express.Router();

import {
  register,
  login,
  logout,
  forgotPassword,
  viewAllUsers,
  toggleSuspension
} from "../controllers/adminAuth.js";
import adminauthMiddleware from "../middleware/adminauth.js";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", adminauthMiddleware, logout);
router.post("/forgot-password", forgotPassword);
// router.post('/reset-password', resetPassword);

// to be moved to admin functionalities router
router.patch("/suspend-user/:userId", adminauthMiddleware, toggleSuspension);
router.get("/view-users", adminauthMiddleware, viewAllUsers);

export default router;
