import express from "express";
import cors from "cors";
const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to clemDish ");
});
app.listen(PORT, () => console.log(`App listening on ${PORT}`));
