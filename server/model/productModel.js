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
    quantity: {
      type: String,
    },
    category: {
      type: String,
      enum: [
        "Drinks",
        "Snacks",
        "Burgers",
        "Pizza",
        "Pasta",
        "Rice",
        "Salads",
        "Sandwiches",
        "Desserts",
        "Beverages",
        "Coffee",
        "Appetizers",
      ],
      default: "Snacks",

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
