import express from 'express';
const router = express.Router();

import {
  register,
  login,
  logout,
  forgotPassword, 
  // resetPassword,
} from '../controllers/auth.js';
import authMiddleware from '../middleware/auth.js';
 

router.post('/register', register);
router.post('/login', login);
router.get('/logout',authMiddleware, logout);
router.post('/forgot-password', forgotPassword);
// router.post('/reset-password', resetPassword);


export default router;
