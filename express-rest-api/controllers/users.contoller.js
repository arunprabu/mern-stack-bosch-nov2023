// Let's respond from here
// Establish the connection with db and execute db queries from here 

// get all users
exports.getUsers = (req, res, next) =>{
  
  // keeping some static data
  console.log("Inside getEmployees");
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
}

// creating User
exports.createUser = (req, res, next) => {
  console.log(req.body); // form data
  res.status(201).json({
    id: 9999,
    ...req.body,
  });
};

// getting user details by id
exports.getUserById = (req, res, next) => {
  console.log(req.params); // receive URL Param
  res.json({
    id: req.params.id,
    name: "Arun",
    email: "a@b.com",
    phone: "3425678",
  });
};

// update user by id, form data
exports.updateUserById = (req, res, next) => {
  console.log(req.params.id); // url param
  console.log(req.body); // form data
  res.status(201).json({
    id: req.params.id,
    ...req.body,
  });
};