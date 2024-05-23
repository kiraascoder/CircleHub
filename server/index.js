import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

dotenv.config(); // Load the environment variables

const url = process.env.DATABASE_URL;
const port = 3000;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Server running on port " + port);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
