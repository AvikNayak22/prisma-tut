import {
  createComment,
  deleteComment,
  fetchComments,
  showComment,
  updateComment,
} from "../controller/comment.controller.js";

const { Router } = require("express");

const router = Router();

router.get("/", fetchComments);
router.get("/:id", showComment);
router.put("/", createComment);
router.put("/:id", updateComment);
router.put("/:id", deleteComment);

export default router;
