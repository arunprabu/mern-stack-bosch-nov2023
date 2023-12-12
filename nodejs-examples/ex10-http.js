// Server Side Rendering in NodeJS
const http = require("http");
const PORT = 3001;

// TODO:
// keep the base template in a separate variable and change the content of h1

http
  .createServer((req, res) => {
    console.log(req.method);
    switch (req.url) {
      case "/":
        res.end(`<html>
          <head>
            <title>Home Page!</title>
          </head>
          <body>
            <nav>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
              </ul>
            </nav>
            <main>
              <h1>Welcome To Home Page!</h1>
            </main>
          </body>
          </html>`);

        break;

      case "/about":
        res.end(`<html>
          <head>
            <title>About Page!</title>
          </head>
          <body>
            <nav>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
              </ul>
            </nav>
            <main>
              <h1>Welcome To About Page!</h1>
            </main>
          </body>
          </html>`);
        break;

      case "/contact":
        res.end(`<html>
          <head>
            <title>Contact Page!</title>
            <style>
              h1 { 
                color: red;
              }
            </style>
          </head>
          <body>
            <nav>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
              </ul>
            </nav>
            <main>
              <h1>Welcome To Contact Page!</h1>
            </main>
          </body>
          </html>`);
        break;

      default:
        res.end(`<html>
          <head>
            <title>404 | Page Not Found</title>
          </head>
          <body>
            <nav>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
              </ul>
            </nav>
            <main>
              <h1>404 | Page Not Found!</h1>
            </main>
          </body>
          </html>`);
    }
  })
  .listen(PORT, () => {
    console.log(
      `Server is started on Port: ${PORT}. Open the URL http://localhost:${PORT}`
    );
  });
