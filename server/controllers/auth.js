import User from "../model/user.js";
// import ResetToken from "../model/reset-token";
import jwt from "jsonwebtoken";
import { generatePublicKey } from "../utils/helper.js";
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

// Create new user
const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      throw new BadRequest("Please provide name, email, and password");
    }
    // Check for exsiting users
    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
      throw new BadRequest("Email already exists");
    }
    const user = await User.create({
      name: name,
      email: email,
      password: password,
      role: "user",
    });
    const token = user.createJWT();

    res.status(StatusCodes.OK).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        wishlist: user.wishlist,
        isSuspended: user.isSuspended,
      },
      token: token,
    });
  } catch (error) {
    next(error.message);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new BadRequest("Please provide email and password");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new Unauthenticated("User does not exist");
    }

    const isPasswordCorrect = await user.comparePasswords(password);

    if (!isPasswordCorrect) {
      throw new Unauthenticated("Invalid password");
    }

    // Generate a random 32-bit public key using the crypto library
    const publicKey = generatePublicKey();

    //  update publicKey in db
    await user.updateOne({ $set: { publicKey: publicKey } });

    // Generate JWT token with the updated publicKey
    const token = await user.createJWT(publicKey);

    res.status(StatusCodes.OK).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        wishlist: user.wishlist,
        isSuspended: user.isSuspended,
      },
      token,
    });
  } catch (error) {
    console.log(error.message);
    next(error.message);
  }
};

const logout = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new CustomError("User not authenticated", StatusCodes.UNAUTHORIZED);
    }
    console.log(req.user);
    // Update the user's public key to null
    await User.updateOne(
      { _id: req.user.userId },
      { $set: { publicKey: null } },
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
//   const user = await User.findOne({ email });
//   if (!user) {
//     throw new BadRequest("Email not found");
//   }
//   const existingToken = await ResetToken.findOne({ owner: user._id });
//   if (existingToken) {
//     throw new BadRequest("Retry after an hour");
//   }

//   const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//     expiresIn: "5m",
//   });

//   await ResetToken.create({ owner: user._id, token: resetToken });

//   const resetLink = `http://localhost:3000/password/reset?token=${resetToken}&id=${user._id}`;
//   const mailConfigs = {
//     from: process.env.MY_EMAIL,
//     to: user.email,
//     subject: "Reset Password for I.S.E.E.A",
//     html: gmailTemplate(resetLink, user.name),
//   };
//   // const mail_configs = {
//   //       from: process.env.MY_EMAIL,
//   //       to: user.email,
//   //       subject: "Reset Password for I.S.E.E.A",
//   //       html: gmailTemplate(
//   //         `http://localhost:3000/password/reset?token=${resetToken}&id=${user._id}`,
//   //         user.name
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
    const user = await User.findOne({ email });
    if (!user) {
      throw new BadRequest("Email not found");
    }
    const token = await ResetToken.findOne({ owner: user._id });

    if (token) {
      throw new BadRequest("retry after an hour");
    }

    const randomBytes = "await createRandomBytes();";

    await ResetToken.create({ owner: user._id, token: randomBytes });

    const mail_configs = {
      from: process.env.MY_EMAIL,
      to: user.email,
      subject: "Reset Password for I.S.E.E.A",
      html: gmailTemplate(
        `http://localhost:3000/password/reset?token=${randomBytes}&id=${user._id}`,
        user.name,
      ),
    };
    mailTransport.sendMail(mail_configs);
    console.log(
      "randombytes",
      randomBytes,
      "user",
      user._id,
      process.env.MY_PASSWORD,
      process.env.MY_EMAIL,
      email,
      user.email,
      user.name,
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
//   const user = await User.findById(req.user._id);

//   if (!user) {
//     throw new BadRequest("Email not found!");
//   }

//   const isSamePassword = await user.comparePasswords(password);

//   if (isSamePassword) {
//     throw new BadRequest("New password cannot be the same as the old password!");
//   }

//   user.password = password;
//   await user.save();
//   await ResetToken.findOneAndDelete({ owner: user._id });

//   const mailConfigs = {
//     from: process.env.MY_EMAIL,
//     to: user.email,
//     subject: "Reset Password for I.S.E.E.A",
//     html: gmailPlainTemplate(`http://localhost:3000/signin`, user.name),
//   };

//   mailTransport.sendMail(mailConfigs);

//   res.json({ success: true, msg: "Password reset successfully" });
// };

export { register, login, logout, forgotPassword };
// resetPassword
