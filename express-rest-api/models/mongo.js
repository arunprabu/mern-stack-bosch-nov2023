const mongoose = require("mongoose");
const mongoConfig = require("../config/mongo.config.json");

const dbUrl = mongoConfig.url;

mongoose
  .connect(dbUrl)
  // .then(() => {
  //   console.log(`Mongoose Connection opened to ${dbUrl}!`);
  // })
  // .catch((err) => {
  //   console.log(`Mongoose Connection Error ${err}!`);
  // });

mongoose.connection.on("connected", () => {
  console.log(`Mongoose Connection opened to ${dbUrl}!`);
});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose Connection Error ${err}!`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection lost');
});

// If the Node Process ends, close the connection
process.on("SIGINT", () => {
  mongoose.connection.close().then(() => {
    console.log(`Mongoose Connection Closed When app terminated`);
    process.exit(0);
  });
});

module.exports = mongoose;
