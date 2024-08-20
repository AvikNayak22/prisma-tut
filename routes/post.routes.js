import {
  createPost,
  deletePost,
  fetchPosts,
  searchPost,
  showPost,
  updatePost,
} from "../controller/Post.controller";

const { Router } = require("express");

const router = Router();

router.get("/", fetchPosts);
router.get("/search", searchPost);
router.get("/:id", showPost);
router.put("/", createPost);
router.put("/:id", updatePost);
router.put("/:id", deletePost);

export default router;
