var express = require("express");
var router = express.Router();

// auth/signup
router.post("/signup", (req, res, next) => {
  res.json({
    message: "Signup success!"
  });
});

// auth/login
router.post("/login", (req, res, next) => {
  res.json({
    message: "login success!",
  });
});

module.exports = router;
