import { Schema, model } from "mongoose";

const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
      },
    ],

    total: Number,
  },
  {
    timestamps: true,
  },
);

const cart = model("Cart", cartSchema);

export default cart;
