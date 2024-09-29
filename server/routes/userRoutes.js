const { Router } = require("express");
const { createUser } = require("../controllers/createUser");
const { deleteUser } = require("../controllers/deleteUser");
const { loginUser } = require("../controllers/loginUser");

const router = Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.delete("/delete", deleteUser);

module.exports = router;
