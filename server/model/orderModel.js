import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "On-Delivery", "Delivered"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

const Orders = model("orders", orderSchema);

export default Orders;
