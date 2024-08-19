const { Router } = require("express");
const UserRoutes = require("./user.routes.js");
const PostRoutes = require("./post.routes.js");
const CommentRoutes = require("./comment.routes.js");

const router = Router();

router.use("/api/user", UserRoutes);
router.use("/api/post", PostRoutes);
router.use("/api/comment", CommentRoutes);

export default router;
