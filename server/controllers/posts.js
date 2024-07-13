import Post from "../models/posts.js";
import User from "../models/user.js";
import path from "path";
import upload from "../utils/upload.js";
import { HttpError } from "../models/errorModel.js";
import { URL } from "url";

const __dirname = new URL(".", import.meta.url).pathname;

// Create Post
export const createPost = async (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }

    const { title, desc, category } = req.body;

    if (!title || !desc || !category || !req.file) {
      return next(new HttpError("Fill in all fields", 422));
    }

    try {
      const newPost = await Post.create({
        title,
        category,
        description: desc,
        img: req.file.path,
        creator: req.user.id,
      });

      if (!newPost) {
        return next(new HttpError("Post couldn't be created", 422));
      }

      const currentUser = await User.findById(req.user.id);
      if (!currentUser) {
        return next(new HttpError("User not found", 404));
      }

      currentUser.posts += 1;
      await currentUser.save();

      res.status(201).json(newPost);
    } catch (error) {
      return next(new HttpError(error.message, 500));
    }
  });
};
// Delele Post
export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("Post has been deleted");
    } else {
      res.status(403).json("You can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Like Post
export const likePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get all post
export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ updateAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

// Get single post
export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

// Get User Posts

export const getUserPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({ creator: req.params.id }).sort({
      updateAt: -1,
    });
    res.status(200).json(posts);
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

// Update Post
export const updatePost = async (req, res, next) => {
  // try {
  //   let filename;
  //   let newfilename;
  //   let updatePost;

  //   const postId = req.params.id;
  //   let { title, category, desc } = req.body;

  //   if (!title || !category || !desc.lengt < 12) {
  //     return next(new HttpError("Fill in all fields", 422));
  //   }
  //   if (!req.files) {
  //     updatePost = await Post.findByIdAndUpdate(
  //       postId,
  //       {
  //         title,
  //         category,
  //         desc: desc,
  //       },
  //       { new: true }
  //     );
  //   } else {
  //     const oldPost = await Post.findById(postId);

  //   }
  // } catch (error) {
  //   return next(new HttpError(error.message, 500));
  // }
  res.json("Update Post");
};
