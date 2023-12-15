// we will have the schema --
// we will create collection with fields and type of data the field can have
// importing crypto from node js -- using this we can encrypt p/w 
const crypto = require('crypto');
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

// Let's make a collection Account with the accountSchema
module.exports = mongoose.model("Account", accountSchema);
