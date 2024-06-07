import expesss from "express";

export const router = expesss.Router();

router.get("/", (req, res) => {
  res.send("Protected Route");
});
