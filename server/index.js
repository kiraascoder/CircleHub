import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();



dotenv.config(); // Load the environment variables
const url = process.env.DATABASE_URL;
const port = 3000;

app.use(express.json());
app.use(cors({ origin: true }));

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
