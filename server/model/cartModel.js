import { Schema, model } from "mongoose";

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "products",
        },
        image: String,
        price: Number,
        quantity: {
          type: Number,
          default: 1,
        },
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
