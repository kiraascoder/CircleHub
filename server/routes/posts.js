import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
  likePost,
  getPost,
  getUserPosts,
} from "../controllers/posts.js";
import { authMiddleware } from "../middleware/authUser.js";

const router = express.Router();

router.post("/", authMiddleware, createPost);

router.put("/:id", authMiddleware, updatePost);

router.delete("/:id", authMiddleware, deletePost);

router.get("/users/:id", getUserPosts);

router.get("/:id", getPost);

router.get("/", getPosts);

router.put("/:id/like", likePost);

export default router;
