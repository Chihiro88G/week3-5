// package manifest, essencial file

/*  
  File: app.js
  Name: Chihiro Hasegawa
  Student ID: 301229147
  Date: 2022 / 10 / 09
*/

// install other packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// require paths' routes
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let booksRouter = require('../routes/books');

// create a new Express application object
let app = express();

// view path and engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// mount middleware functions
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// activate static routes
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// activate routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bookList', booksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

// *********** added Sep 29, 2022 ************ //
// connect to Mongo DB
let mongoose = require('mongoose');
let db = require('./db'); // showld be same place as db

// points mongoose to the db URI
mongoose.connect(db.URI);

// to create an event to let mongo connect to the database
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'connection Error: '));
mongoDB.once('open', () => {
  console.log('connected to MongoDB');
})
// ******************************************* //

// return the application object
module.exports = app;

