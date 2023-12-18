var express = require("express");
const { signup, login } = require("../controllers/auth.controller");
var router = express.Router();

// auth/signup
router.post("/signup", signup);

// auth/login
router.post("/login", login);

// router.get("/verify-email", verifyEmail);

// router.get("/forgot-pw", forgotPassword);

// router.get("/reset-pw", resetPassword);

module.exports = router;
