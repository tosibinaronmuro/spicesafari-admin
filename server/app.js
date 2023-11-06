import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./connectdb/connectdb.js";
import Authrouter from "./routes/auth.js";
import AdminAuthrouter from "./routes/adminAuth.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/order.js";
import cartRouter from "./routes/cartRoutes.js";
import notFoundHandler from "./middleware/not-found.js";
import errorHandler from "./middleware/errors-handler.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    optionsSuccessStatus: 200,
    credentials: true,
  }),
);

app.use(express.static("uploads"));
app.use(express.json());
app.use("/api/v1/auth", Authrouter);
app.use("/api/v1/auth/admin", AdminAuthrouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("Welcome to clemDish ");
});

app.use(notFoundHandler);
app.use(errorHandler);
const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("Database connection established");
    app.listen(port, console.log(`app is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
