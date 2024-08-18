const { Router } = require("express");
const UserRoutes = require("./user.routes.js");

const router = Router();

router.use("/api/user", UserRoutes);

export default router;
