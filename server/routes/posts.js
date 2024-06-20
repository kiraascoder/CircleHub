import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
  likePost,
  getTimelinePosts,
} from "../controllers/posts.js";

const router = express.Router();

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

router.get("/:id", getPost);

router.get("/timeline/all", getTimelinePosts);

router.put("/:id/like", likePost);

export default router;
