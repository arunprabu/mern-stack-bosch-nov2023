// Let's work on http
const http = require("http"); // importing http module
const PORT = 3001;

http
  .createServer((req, res) => {
    // this callback fn will be called whenever the browser sends a request to http://localhost:3001
    console.log("Request Received");
    // console.log(req);
    console.log(req.url);

    // let's send the res
    res.write("Welcome to MyApp"); // constructing the response
    res.end(); // we are sending the response and ending the connection
  })
  .listen(PORT, () => {
    console.log(
      `Server is started on Port: ${PORT}. Open the URL http://localhost:${PORT}`
    );
  });
