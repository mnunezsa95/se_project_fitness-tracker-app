const { Router } = require("express");
const { createUser } = require("../controllers/createUser");
const { deleteUser } = require("../controllers/deleteUser");
const { getUser } = require("../controllers/getUser");

const router = Router();

router.post("/signup", createUser);
router.get("/signin", getUser);
router.delete("/delete", deleteUser);

module.exports = router;
