import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";

dotenv.config(); // Load the environment variables
const app = express();
const url = process.env.DATABASE_URL;
const port = 3000;
export const jwtToken = process.env.JWT_SECRET;
app.use(express.json());
app.use(cors({ origin: true }));

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

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
