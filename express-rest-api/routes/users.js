var express = require("express");
const {
  createUser,
  updateUserById,
  getUserById,
  getUsers,
} = require("../controllers/users.contoller");
const authUtil = require('../utils/authUtil');

var router = express.Router();

/* GET users. */
router.get("/", getUsers);

/* POST users */
router.post("/", authUtil.required, createUser);

/* GET users/:id -- URL Param */  
router.get('/:id', authUtil.optional, getUserById);

/* UPDATE users/:id - URL Param */
router.put("/:id", updateUserById);

/* TODO: also learn about the diff b/w PUT method and PATCH */
/* TODO: Implement Delete user by id */

module.exports = router;
