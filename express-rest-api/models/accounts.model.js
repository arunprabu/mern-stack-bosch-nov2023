// we will have the schema --
// we will create collection with fields and type of data the field can have
// importing crypto from node js -- using this we can encrypt p/w 
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const mongoose = require("./mongo");

const accountSchema = new mongoose.Schema(
  {
    fullName: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    salt: String,
    hash: String,
    isEmailVerified: Boolean, 
    createdBy: String,
    createdOn: {
      type: Date,
      default: Date.now,
    },
    updatedBy: String,
    updatedOn: {
      type: Date,
      default: Date.now,
    },
  },
  {
    strict: true, // keep it true -- only then password will not not saved
  }
);

// to convert the password into salt and hash
accountSchema.methods.encryptPassword = function (password) {
  // do NOT write this function as arrow fn -- you will lost this keyword's context
  console.log(this);
  console.log(password);
  // convert the password -- generate salt and hash
  this.salt = crypto.randomBytes(459).toString('hex');
  console.log(this.salt);
  // Let's now generate hash using the above salt and password
  this.hash = crypto.pbkdf2Sync(password, this.salt, 957245, 462, 'sha512').toString('hex');
  console.log(this.hash);
};

accountSchema.methods.validatePassword = function(password) {
  console.log(password);
  // accessing the exiting salt from account
  console.log(this.salt);
  // accessing the existing hash from account
  console.log(this.hash);

  // Let's now generate new hash using the above salt and entered password
  const newHash = crypto
    .pbkdf2Sync(password, this.salt, 957245, 462, "sha512")
    .toString("hex");

  return this.hash === newHash;
}

accountSchema.methods.generateJwt = function() {
  const today = new Date();
  const tokenExpirationDate = new Date(today);
  tokenExpirationDate.setDate(today.getDate() + 60);

  console.log(tokenExpirationDate.getTime() / 1000);
  console.log(parseInt(tokenExpirationDate.getTime() / 1000, 10));
  // signing the payload with secret
  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(tokenExpirationDate.getTime() / 1000, 10),
  }, 'NodeJS is better than Java');
}

// Let's make a collection Account with the accountSchema
module.exports = mongoose.model("Account", accountSchema);
