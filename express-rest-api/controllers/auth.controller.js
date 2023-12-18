const passport = require("passport");
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
    email: req.body.email,
    isEmailVerified: false
  };

  const accountDao = new Account(formData);
  accountDao.encryptPassword(req.body.password);
  accountDao
    .save()
    .then((result) => {
      // you can send email to the user
      // TODO: construct a link with random characters... 
      // localhost:3001/auth/verify-email?email=a@b.com
      // TODO: learn about using https://www.npmjs.com/package/@sendgrid/mail to send email
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

exports.login = (req, res) => {
  // get the form data from req.body
  console.log(req.body);
  /*
    1. check whether the email exists in db
    2. if true, then decrypt the password 
      2.1. access the saved salt for the account
      2.2. generate a new hash using the salt and password
      2.3. compare the existing hash in db with the newly generated one. 
      2.4. if both matches login is valid. 
      2.5. if login is valid, then generate Json web token(JWT) send the token to the front end
  */

  passport.authenticate("local", (err, account, info) => {
    if (err) {
      res.json(err);
    }

    // if account is found
    if (account) {
      // generate Json Web Token (JWT) and send it in res
      const authToken = account.generateJwt();
      console.log(authToken);
      res.json({
        status: "Logged In Successfully!",
        token: authToken,
      });
    } else {
      // send the info as response
      res.json({
        status: info,
      });
    }
  })(req, res); // you need to pass the entire req and res object -- not just req.body
};
