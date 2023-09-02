import express from "express";
const router = express.Router();

import {
  register,
  login,
  logout,
  forgotPassword,
  // resetPassword,
  suspendUser,
  unsuspendUser,
  viewAllUsers
} from "../controllers/adminAuth.js";
import adminauthMiddleware from "../middleware/adminauth.js";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", adminauthMiddleware, logout);
router.post("/forgot-password", forgotPassword);
// router.post('/reset-password', resetPassword);

// to be moved to admin functionalities router
router.put("/unsuspend-user/:userId", adminauthMiddleware, unsuspendUser);
router.put("/suspend-user/:userId", adminauthMiddleware, suspendUser);
router.get("/view-users", adminauthMiddleware, viewAllUsers);

export default router;
