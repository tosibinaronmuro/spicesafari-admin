import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./connectdb/connectdb.js";
import Authrouter from "./routes/auth.js"
import notFoundHandler from './middleware/not-found.js'; 
import errorHandler from './middleware/errors-handler.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", Authrouter);

app.get("/", (req, res) => {
  res.send("Welcome to clemDish ");
});


app.use(notFoundHandler);
app.use(errorHandler);
const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`app is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
