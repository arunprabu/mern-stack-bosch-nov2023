var express = require("express");
var router = express.Router();

/* GET users. */
router.get("/", function (req, res, next) {
  // keeping some static data
  const userList = [
    {
      id: 1,
      name: "Arun",
      email: "a@b.com",
      phone: "3425678",
    },
    {
      id: 2,
      name: "John",
      email: "j@k.com",
      phone: "8976556758",
    },
  ];
  res.json(userList);
});

/* POST users */
router.post("/", (req, res, next) => {
  console.log(req.body); // form data
  res.status(201).json({
    id: 9999,
    ...req.body,
  });
});

/* GET users/:id -- URL Param */  
router.get('/:id', (req, res, next) => {
  console.log(req.params); // receive URL Param
  res.json({
    id: req.params.id,
    name: "Arun",
    email: "a@b.com",
    phone: "3425678",
  });
});

/* UPDATE users/:id - URL Param */
router.put('/:id', (req, res, next) => {
  console.log(req.params.id); // url param
  console.log(req.body); // form data
  res.status(201).json({
    id: req.params.id,
    ...req.body
  });
});

/* TODO: also learn about the diff b/w PUT method and PATCH */
/* TODO: Implement Delete user by id */

module.exports = router;
