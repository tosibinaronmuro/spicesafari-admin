import User from "../model/user.js";
import jwt from "jsonwebtoken";
import { Unauthenticated } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      throw new Unauthenticated("Authentication invalid");
    }

    let token;
    if (authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
    } else if (req.cookies.token) {
      token = req.cookies.token;
    }

    const payload = await jwt.verify(token, process.env.JWT_SECRET);
     
    
    const user = await User.findById(payload.userId);
     
    if (!user) {
      throw new Unauthenticated("User not found");
    }

    if (user.role !== "user") {
      throw new Unauthenticated("Access denied, login as a user");
    }

    // Check and verify public key
    if (payload.publicKey !== user.publicKey) {
      throw new Unauthenticated("Invalid public key, retry login");
    }

    req.user = { userId: payload.userId, name: payload.name, role:payload.role};
    next();
  } catch (error) {
    next(new Unauthenticated(error));
    console.log(error)
  }
};

export default authMiddleware;
