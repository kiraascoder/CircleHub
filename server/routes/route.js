import express from "express";
import { register } from "../controllers/user.js";

export const router = express.Router();

router.post("/register", register);
