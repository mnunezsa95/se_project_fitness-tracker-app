const { Router } = require("express");
const { createUser } = require("../controllers/createUser");

const router = Router();

router.post("/signup", createUser);

module.exports = router;
