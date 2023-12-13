const express = require("express"); // importing expressjs module
const app = express(); // Creates an Express application. 
const port = 3001;

// GET Home Page -- localhost:3001/
app.get("/", (req, res) => {
  res.send("Home Page!");
  // TODO: send the html file in response
});

// POST Home Page -- localhost:3001/
app.post("/", (req, res) => {
  res.send("Saved Successfully!");
});

// GET About Page -- localhost:3001/about
app.get("/about", (req, res) => {
  res.send("About Page!");
});

// GET About Page -- localhost:3001/contact
app.get("/contact", (req, res) => {
  res.send("Contact Page!");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}. Open localhost:${port}`);
});
