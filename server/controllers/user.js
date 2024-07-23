import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { StreamChat } from "stream-chat";
import { jwtToken } from "../index.js";
import { api_key, api_secret, app_id } from "../index.js";
import fs from "fs";
import path from "path";
import upload from "../utils/upload.js";
import { HttpError } from "../models/errorModel.js";

// Register User
export const register = async (req, res) => {
  const { name, email, password, password2, phoneNumber } = req.body;

  // Check if all required fields are filled
  if (!name || !email || !password || !password2) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all inputs" });
  }

  // Check if the user already exists
  let user = await User.findOne({ email });
  if (user) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }

  // Validate password length
  if (password?.trim().length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password too short, Please Try Again",
    });
  }

  // Check if passwords match
  if (password !== password2) {
    return res
      .status(400)
      .json({ success: false, message: "Passwords didn't match" });
  }

  try {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword,
      phoneNumber,
    });

    // Generate token for the user
    const serverClient = StreamChat.getInstance(api_key, api_secret, app_id);
    const token = serverClient.createToken(email);

    // Save user to database
    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "User created", token });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
// Login
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all inputs" });
  }
  const newEmail = email.toLowerCase();
  const user = await User.findOne({ email: newEmail });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
      };
      const token = jwt.sign(payload, jwtToken, {
        expiresIn: "1d",
      });
      return res.status(200).json({
        success: true,
        message: "Login success",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
        },
        token: token,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Wrong password",
      });
    }
  } else {
    return res
      .status(400)
      .json({ success: false, message: "User does not exist" });
  }
};

// Update User
export const updateUser = async (req, res, next) => {
  try {
    const {
      name,
      email,
      currentPassword,
      newPassword,
      confirmPassword,
      desc,
      phoneNumber,
    } = req.body;

    // Validasi input
    if (
      !name ||
      !email ||
      !currentPassword ||
      !newPassword ||
      !confirmPassword ||
      !desc ||
      !phoneNumber
    ) {
      return next(new HttpError("Please fill all inputs", 422));
    }

    // Cari user berdasarkan ID
    const user = await User.findById(req.user.id);
    if (!user) {
      return next(new HttpError("User not found", 403));
    }

    // Cek email apakah sudah digunakan oleh user lain
    const checkEmail = await User.findOne({ email });
    if (checkEmail && checkEmail._id.toString() !== req.user.id.toString()) {
      return next(new HttpError("Email already exists", 422));
    }

    // Validasi password saat ini
    const validatePassword = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!validatePassword) {
      return next(new HttpError("Invalid current password", 422));
    }

    // Validasi kesamaan password baru dan konfirmasi password
    if (newPassword !== confirmPassword) {
      return next(new HttpError("New passwords do not match", 422));
    }

    // Hash password baru
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update user dengan data baru
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, email, password: hashedPassword, desc, phoneNumber },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

// Log Out
export const logout = async (req, res) => {
  return res.status(200).json({ success: true, message: "Logout success" });
};

// Get User
export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return next(new HttpError("UserNot Found.", 404));
    }
    res.status(200).json(user);
  } catch (error) {
    return next(new HttpError({ error }));
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json({ success: true, data: user });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    return res
      .status(400)
      .json({ success: false, message: "You can delete only your account" });
  }
};

// Follow User
export const followUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        // Check if the user is already followed
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        return res
          .status(200)
          .json({ success: true, message: "User followed" });
      } else {
        // If the user is already followed
        return res
          .status(400)
          .json({ success: false, message: "User already followed" });
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    return res
      .status(400)
      .json({ success: false, message: "You can't follow yourself" });
  }
};

// Unfollow User
export const unfollowUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        // Check if the user is already followed
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        return res
          .status(200)
          .json({ success: true, message: "User unfollowed" });
      } else {
        // If the user is already followed
        return res
          .status(400)
          .json({ success: false, message: "User not followed" });
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    return res
      .status(400)
      .json({ success: false, message: "You can't unfollow yourself" });
  }
};

export const changeAvatar = async (req, res, next) => {
  const upload = configureMulter("avatar");
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }

    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return next(new HttpError("User not found", 404));
      }

      // Hapus avatar lama jika ada
      if (user.avatar) {
        fs.unlink(user.avatar, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Failed to delete old avatar", unlinkErr);
          }
        });
      }
      if (!req.file) {
        return res
          .status(400)
          .json({ success: false, message: "No file uploaded" });
      }

      // Simpan path avatar baru ke user
      user.avatar = req.file.path;
      await user.save();

      res
        .status(200)
        .json({ success: true, message: "Avatar changed successfully" });
    } catch (error) {
      return next(new HttpError(error.message, 500));
    }
  });
};
export const followers = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(new HttpError("User not found", 404));
    }
    const followers = await User.find({ _id: { $in: user.followers } }).select(
      "-password"
    );
    res.status(200).json({ success: true, followers });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};
export const followings = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(new HttpError("User not found", 404));
    }
    const followings = await User.find({
      _id: { $in: user.followings },
    }).select("-password");
    res.status(200).json({ success: true, followings });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};
