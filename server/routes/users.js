import express from "express";
import {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  unfollowUser,
  changeAvatar,
} from "../controllers/user.js";
import { authMiddleware } from "../middleware/authUser.js";

const router = express.Router();

router.put("/update-user", authMiddleware, updateUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.put("/:id/follow", followUser);

router.put("/:id/unfollow", unfollowUser);

router.post("/change-avatar", authMiddleware, changeAvatar);

export default router;
