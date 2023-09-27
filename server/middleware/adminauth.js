import Admin from "../model/adminAuth.js";
import jwt from "jsonwebtoken";
import { Unauthenticated } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

const adminauthMiddleware = async (req, res, next) => {
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

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    

    const user = await Admin.findById(payload.adminId);
    if (!user) {
      throw new Unauthenticated("User not found");
    }

    if (user.role !== "admin") {
      throw new Unauthenticated("Access denied, login as an Admin");
    }

    // Check and verify public key
    if (payload.publicKey !== user.publicKey) {
      // console.log("payload",payload.publicKey, "user", user.publicKey)
      throw new Unauthenticated("Invalid public key, retry login");
    }

    req.user = { userId: payload.adminId, name: payload.name, role:payload.role};
    next();
  } catch (error) {
    next(new Unauthenticated(error));
    console.log(error)
  }
};

export default adminauthMiddleware;
