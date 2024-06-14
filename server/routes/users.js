import express from "express";
import { getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.put("/:id", updateUser);

router.get("/:id", getUser);

export default router;
