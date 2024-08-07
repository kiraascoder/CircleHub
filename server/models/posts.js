import mongoose, { Schema } from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "Art",
        "Comics",
        "Crafts",
        "Dance",
        "Design",
        "Fashion",
        "Film",
        "Food",
        "Games",
        "Journalism",
        "Music",
        "Photography",
        "Technology",
        "Theater",
        "Uncategorized",
      ],
      message: "{VALUE IS NOT SUPPORTED}",
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
