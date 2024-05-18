const express = require("express");
const router = express.Router();

const { helloUser } = require("../controllers/userController");  // Use CommonJS require

router.get("/",helloUser)

module.exports = router;
