const { expressjwt: jwt } = require("express-jwt"); // npm i express-jwt

/* from postman rest client 
  * hit http://localhost:3002/api/users over POST method 
  * go to Headers tab in Postman, 
  * then add key 'authorization' with value 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpAay5jb20iLCJpZCI6IjY1N2ZjOTE4ZDFjZmRkYzBjZjE3YTM3YyIsImV4cCI6MTcwODA2ODU1NiwiaWF0IjoxNzAyODg0NTU2fQ.6YFctKdpzhCf2IIN20OFEPPK4uEnKDnhRGTUuka_vjA'
  * Click on Send
*/

const getTokenFromHeaders = (req) => {
  const {
    headers: { authorization }, // authorization is key in header
  } = req;

  if (authorization && authorization.split(" ")[0] === "Bearer") {
    return authorization.split(" ")[1];
  }
  return null;
};

const auth = {
  required: jwt({
    secret: "NodeJS is better than Java",
    algorithms: ["HS256"],
    userProperty: "payload",
    getToken: getTokenFromHeaders,
    credentialsRequired: true,
  }),
  optional: jwt({
    secret: "NodeJS is better than Java",
    algorithms: ["HS256"],
    userProperty: "payload",
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  }),
};

module.exports = auth;
