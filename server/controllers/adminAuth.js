import Admin from "../model/adminAuth.js";
import User from "../model/user.js";
import { generatePublicKey } from "../utils/helper.js";
// import ResetToken from "../model/reset-token";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

import crypto from "crypto";
import ResetToken from "../model/ResetToken.js";

import {
  CustomError,
  BadRequest,
  Unauthenticated,
  NotFound,
} from "../errors/index.js";

import {
  mailTransport,
  gmailTemplate,
  gmailPlainTemplate,
} from "../utils/mail.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      throw new BadRequest("Please provide name, email, and password");
    }
    const emailAlreadyExists = await Admin.findOne({ email });
    if (emailAlreadyExists) {
      throw new BadRequest("Email already exists");
    }
    const admin = await Admin.create({
      name: name,
      email: email,
      password: password,
      role: "admin",
    });
    const token = admin.createJWT();

    res.status(StatusCodes.OK).json({
      admin: { name: admin.name, email: admin.email, role: admin.role },
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new BadRequest("Please provide email and password");
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      throw new Unauthenticated("admin account does not exist, try again");
    }

    const isPasswordCorrect = await admin.comparePasswords(password);

    if (!isPasswordCorrect) {
      throw new Unauthenticated("Invalid password");
    }

   // Generate a random 32-bit public key using the crypto library
   const publicKey = generatePublicKey();

   //  update publicKey in db
   await admin.updateOne({ $set: { publicKey: publicKey } });

   // Generate JWT token with the updated publicKey
   const token = await admin.createJWT(publicKey);

    res.status(StatusCodes.OK).json({
      admin: { name: admin.name, email: admin.email, role: admin.role },
      token: token
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new CustomError("User not authenticated", StatusCodes.UNAUTHORIZED);
    }
console.log(req.user)
    // Update the user's public key to null
    await Admin.updateOne(
      { _id: req.user.userId },
      { $set: { publicKey: null } }
    );

    // Clear session and JWT cookie
    // req.session.destroy();
    // res.clearCookie("jwt");

    res.status(StatusCodes.OK).send("Logged out successfully");
  } catch (error) {
    next(error);
  }
};

// const forgotPassword = async (req, res, next) => {
//   try {
//     const { email } = req.body;
//   if (!email) {
//     throw new BadRequest("No email provided");
//   }
//   const admin = await Admin.findOne({ email });
//   if (!admin) {
//     throw new BadRequest("Email not found");
//   }
//   const existingToken = await ResetToken.findOne({ owner: admin._id });
//   if (existingToken) {
//     throw new BadRequest("Retry after an hour");
//   }

//   const resetToken = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
//     expiresIn: "5m",
//   });

//   await ResetToken.create({ owner: admin._id, token: resetToken });

//   const resetLink = `http://localhost:3000/password/reset?token=${resetToken}&id=${admin._id}`;
//   const mailConfigs = {
//     from: process.env.MY_EMAIL,
//     to: admin.email,
//     subject: "Reset Password for I.S.E.E.A",
//     html: gmailTemplate(resetLink, admin.name),
//   };
//   // const mail_configs = {
//   //       from: process.env.MY_EMAIL,
//   //       to: admin.email,
//   //       subject: "Reset Password for I.S.E.E.A",
//   //       html: gmailTemplate(
//   //         `http://localhost:3000/password/reset?token=${resetToken}&id=${admin._id}`,
//   //         admin.name
//   //       ),

//   //     };
//   //   await mailTransport.sendMail(mail_configs);

//   mailTransport.sendMail(mailConfigs);

//   res.json({ success: true, msg: "Reset link has been successfully sent to your email account" });
//   } catch (error) {
//     next(error)
//   }
// };

const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      throw new BadRequest("no email provided");
    }
    const admin = await Admin.findOne({ email });
    if (!admin) {
      throw new BadRequest("Email not found");
    }
    const token = await ResetToken.findOne({ owner: admin._id });

    if (token) {
      throw new BadRequest("retry after an hour");
    }

    const randomBytes = "await createRandomBytes();";

    await ResetToken.create({ owner: admin._id, token: randomBytes });

    const mail_configs = {
      from: process.env.MY_EMAIL,
      to: admin.email,
      subject: "Reset Password for I.S.E.E.A",
      html: gmailTemplate(
        `http://localhost:3000/password/reset?token=${randomBytes}&id=${admin._id}`,
        admin.name
      ),
    };
    mailTransport.sendMail(mail_configs);
    console.log(
      "randombytes",
      randomBytes,
      "admin",
      admin._id,
      process.env.MY_PASSWORD,
      process.env.MY_EMAIL,
      email,
      admin.email,
      admin.name
    );
    res.json({
      success: true,
      msg: "Reset link has been successfully sent to your email account",
    });
  } catch (error) {
    next(error);
  }
};
// const resetPassword = async (req, res) => {
//   const { password } = req.body;
//   const admin = await Admin.findById(req.admin._id);

//   if (!admin) {
//     throw new BadRequest("Email not found!");
//   }

//   const isSamePassword = await admin.comparePasswords(password);

//   if (isSamePassword) {
//     throw new BadRequest("New password cannot be the same as the old password!");
//   }

//   admin.password = password;
//   await admin.save();
//   await ResetToken.findOneAndDelete({ owner: admin._id });

//   const mailConfigs = {
//     from: process.env.MY_EMAIL,
//     to: admin.email,
//     subject: "Reset Password for I.S.E.E.A",
//     html: gmailPlainTemplate(`http://localhost:3000/signin`, admin.name),
//   };

//   mailTransport.sendMail(mailConfigs);

//   res.json({ success: true, msg: "Password reset successfully" });
// };
const viewAllUsers = async (req, res, next) => {
  try {
    // Check if the requester is an admin
    if (req.user.role !== "admin") {
      throw new BadRequest("Only admins can view all users");
    }

    // Fetch all users
    const users = await User.find({}, "-password"); // Exclude password from the response

    res.status(StatusCodes.OK).json({ success: true, users });
  } catch (error) {
    next(error);
  }
};

const toggleSuspension = async (req, res, next) => {
  const { userId } = req.params;

  try {
    if (req.user.role !== "admin") {
      throw new BadRequest("Only admins can suspend/unsuspend users");
    }

    const user = await User.findById(userId);

    if (!user) {
      throw new BadRequest("User not found");
    }

    // Toggle the isSuspended status
    user.isSuspended = !user.isSuspended;
 
    await user.updateOne({ $set: { isSuspended: user.isSuspended } });

    const successMessage = user.isSuspended
      ? "User suspended successfully"
      : "User unsuspended successfully";

    res.status(StatusCodes.OK).json({ success: true, msg: successMessage });
  } catch (error) {
    next(error);
  }
};


export { register, login, logout, forgotPassword, toggleSuspension, viewAllUsers};
// resetPassword
