var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.json([
    {
      id: 1,
      isContractEmployee: false,
      name: "John",
      skills: ["html", "css", "js", "ts"],
    },
    {
      id: 2,
      isContractEmployee: true,
      name: "Steve",
      skills: ["react", "nodejs", "mongodb", "mysql"],
    },
  ]);
});

module.exports = router;
