import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isSuspended: {
    type: Boolean,
    default: false,
  },
  wishlist: [
    {
      type: Schema.Types.ObjectId,
      ref: "products",
    },
  ],
  publicKey: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function (publicKey) {
  return jwt.sign(
    {
      userId: this._id,
      name: this.name,
      email: this.email,
      publicKey: publicKey,
      role: this.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2d" },
  );
};

userSchema.methods.comparePasswords = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

const User = model("User", userSchema);

export default User;
