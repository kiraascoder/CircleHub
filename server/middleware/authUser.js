import jwt from "jsonwebtoken";
import { HttpError } from "../models/errorModel.js";

export const authMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization || req.headers.Authorization;

  console.log("Authorization Header:", authorization); // Log header

  if (authorization && authorization.startsWith("Bearer ")) {
    const token = authorization.split(" ")[1];

    console.log("Token:", token); // Log token

    try {
      const info = jwt.verify(token, process.env.JWT_SECRET);
      req.user = info;
      return next();
    } catch (err) {
      return next(new HttpError("Unauthorized. Invalid Token.", 403));
    }
  } else {
    return next(new HttpError("Unauthorized. No Token Provided.", 403));
  }
};
