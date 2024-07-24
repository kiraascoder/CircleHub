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
