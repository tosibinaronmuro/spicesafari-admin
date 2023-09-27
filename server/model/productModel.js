import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    otherImages: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },
    category: {
      type: String,
      // type: Schema.Types.ObjectId,
      // ref: "category",
    },
    rating: [
      {
        type: Number,
        Max: 5,
        default: 0,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const products = model("products", productSchema);

export default products;
