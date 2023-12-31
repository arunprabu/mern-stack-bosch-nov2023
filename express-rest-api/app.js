// node module imports
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');

// custom imports
require('./config/passport.config'); // passport config is imported
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeesRouter = require("./routes/employees");
var authRouter = require("./routes/auth");

var app = express(); // Creates an Express application. 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev')); // logger middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public')));

// Before all urls -- let's initialize passport
// Setting up auth middleware
passport.initialize();

// URLs are configured
app.use('/', indexRouter);

// REST API Endpoints configuration
app.use('/api/users', usersRouter);
app.use('/api/employees', employeesRouter);
app.use("/api/auth", authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
