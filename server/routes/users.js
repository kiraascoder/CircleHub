import express from "express";
import {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  unfollowUser,
  changeAvatar,
  followers,
  followings,
} from "../controllers/user.js";
import { authMiddleware } from "../middleware/authUser.js";

const router = express.Router();

router.put("/:id", authMiddleware, updateUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.get("/:id/followers", authMiddleware, followers); // Corrected

router.get("/:id/followings", authMiddleware, followings); // Corrected

router.put("/:id/follow", followUser);

router.put("/:id/unfollow", unfollowUser);

router.post("/change-avatar", authMiddleware, changeAvatar);

export default router;
