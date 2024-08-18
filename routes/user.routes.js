const {
  createUser,
  updateUser,
  fetchUsers,
  showUser,
  deleteUser,
} = require("../controller/user.controller");
const { Router } = require("express");

const router = Router();

router.get("/", fetchUsers);
router.get("/:id", showUser);
router.put("/", createUser);
router.put("/:id", updateUser);
router.put("/:id", deleteUser);

export default router;
