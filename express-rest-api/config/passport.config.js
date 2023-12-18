const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Account = require("../models/accounts.model");

// basic config for login using passport local
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      Account.findOne({ email: email })
        .then((account) => {
          // Return error message if account not found in database
          if (!account) {
            return done(null, false, {
              message: "Incorrect email or password.",
            });
          }

          // Return if password is wrong
          if (account && !account.validatePassword(password)) {
            return done(null, false, {
              message: "Password is wrong",
            });
          }

          // // If credentials are correct, return the account object
          return done(null, account);
        })
        .catch((err) => { // only if exception or errors in db related calls
          if (err) {
            return done(err);
          }
        });
    }
  )
);
