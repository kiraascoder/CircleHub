import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import { notFound } from "./middleware/errorMiddleware.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";

const app = express();

// ENV
dotenv.config(); // Load the environment variables

const url = process.env.DATABASE_URL;
export const api_key = process.env.STREAM_API_KEY;
export const api_secret = process.env.STREAM_API_SECRET;
export const app_id = process.env.STREAM_APP_ID;
export const jwtToken = process.env.JWT_SECRET;

app.use(express.json());
app.use(cors({ origin: true }));

// static File
app.use("/uploads", express.static("uploads"));

// Router
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

// Error Handler
app.use(notFound);
app.use(errorMiddleware);

// Mongo Session Store
app.use(
  session({
    secret: process.env.SEC_SESS,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: process.env.DATABASE_URL,
      ttl: 14 * 24 * 60 * 60,
      autoRemove: "native",
    }),
  })
);

// Connect To MongoDB
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
