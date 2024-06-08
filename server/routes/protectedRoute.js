import express from "express";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
  res.status(200).json({ success: true, message: "Protected route" });
});

export default protectedRoute;
