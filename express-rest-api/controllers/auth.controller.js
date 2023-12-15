const Account = require("../models/accounts.model");

exports.signup = (req, res, next) => {
  console.log(req.body); // form data will have email and password
  /*  
    1. get the form data in req.body 
    2. encrypt the password 
    3. get the salt and hash
    4. save the data with salt and hash --- not with password 
  */
 // remove the password from req.body
  const formData = {
    fullName: req.body.fullName,
    email: req.body.email
  };

  const accountDao = new Account(formData);
  accountDao.encryptPassword(req.body.password);
  accountDao
    .save()
    .then((result) => {
      res.status(201).json({
        status: "Account Created Successfully!",
      });
    })
    .catch((err) => {
      res.json({
        message: err.message || `Some Error occurred while signing up`,
      });
    });
};

exports.login = (req, res, next) => {
  res.json({
    message: "Login success!",
  });
};
