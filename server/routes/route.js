import express from "express";
import { register, login, getUser, updateUser } from "../controllers/user.js";

export const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.put("/:id", updateUser);

router.get("/:id", getUser);
