// Let's respond from here
// Establish the connection with db and execute db queries from here 
const User = require('../models/users.model');

// get all users
exports.getUsers = (req, res, next) =>{
  // keeping some static data
  console.log("Inside getUsers");
  // Let's get the data from db
  User.find({})
    .then((data) => {
      res.status(200)
        .json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: err.message || "Some Error occurred while fetching users",
      });
    });
}

// creating User
exports.createUser = (req, res, next) => {
  console.log(req.body); // form data
  // Let's save the form data in mondgo db 
  /*
    1. get the req.body -- that is the form data to be saved [DONE]
    2. connect to db [DONE]
    3. insert the above data into collection [DONE]
    4. get the confirmation from db and send it back as res [DONE]
  */
  const userDao = new User(req.body); // create a draft
  // saving to create a new document
  // by using the syntax of mongoose
  userDao.save()
    .then((data) => {
      console.log(data);
      res.status(201).json(data);
    })
    .catch((err) => {
      res.json({
        message: err.message || 'Some Error occurred while creating user'
      })
    });
};

// getting user details by id
exports.getUserById = (req, res, next) => {
  console.log(req.params.id); // receive URL Param
  User.findOne({ _id: req.params.id }) // check it with object id from db
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: err.message || `Some Error occurred while fetching user by id: ${req.params.id} `,
      });
    });
};

// update user by id, form data
exports.updateUserById = (req, res, next) => {
  console.log(req.params.id); // url param
  console.log(req.body); // form data
  // if you want to receive query params  -- antyhing that comes after ? in url
  // console.log(req.query); 
  User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message:
          err.message ||
          `Some Error occurred while updating user by id: ${req.params.id}`,
      });
    });
};