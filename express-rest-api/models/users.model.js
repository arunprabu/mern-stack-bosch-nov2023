// we will have the schema -- 
// we will create collection with fields and type of data the field can have
const mongoose  = require("./mongo");

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: {
    type: String,
    unique: true, // unique email
    required: true, // mandatory field
  },
  createdBy: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedBy: String,
  updatedOn: {
    type: Date,
    default: Date.now,
  }
}, {
  strict: false // anything other than the above can be saved
});

// Let's make a collection User with the userSchema
module.exports  = mongoose.model("User", userSchema);

