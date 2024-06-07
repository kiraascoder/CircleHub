import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register User
export const register = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        phoneNumber: req.body.phoneNumber,
      });

      await user.save();
      return res.status(200).json({ success: true, message: "User created" });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
};

// Login

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    if (isMatch) {
      return res.status(200).json({ success: true, message: "Login success" });
    } else {
      return res
        .status(400)
        .json({ token, success: false, message: "Wrong password" });
    }
  } else {
    return res
      .status(400)
      .json({ success: false, message: "User does not exist" });
  }
};

// Logout

export const logout = async (req, res) => {
  return res.status(200).json({ success: true, message: "Logout success" });
};

// Get User

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    return res.status(200).json({ user });
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};
