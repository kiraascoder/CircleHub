import express from "express";
import { register, login } from "../controllers/user.js";

export const router = express.Router();

router.post("/register", register);

router.post("/login", login);
