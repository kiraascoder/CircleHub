import User from "../models/user.js";
import bcrypt from "bcrypt";
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
