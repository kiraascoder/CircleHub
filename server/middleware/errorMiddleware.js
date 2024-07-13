// Unsupported Routes (404)
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Middleware to handle Errors
export const errorMiddleware = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "An unknown error occurred",
  });
};
