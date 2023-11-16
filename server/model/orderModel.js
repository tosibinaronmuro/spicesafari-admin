import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "products",
      },
    ],
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "On-Delivery", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

const Orders = model("orders", orderSchema);

export default Orders;
