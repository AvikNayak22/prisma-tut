const { Router } = require("express");
const UserRoutes = require("./user.routes.js");
const PostRoutes = require("./post.route.js");

const router = Router();

router.use("/api/user", UserRoutes);
router.use("/api/post", PostRoutes);

export default router;
