import express from "express";
import {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  unfollowUser,
} from "../controllers/user.js";

const router = express.Router();

router.put("/:id", updateUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.put("/:id/follow", followUser);

router.put("/:id/unfollow", unfollowUser);

export default router;
