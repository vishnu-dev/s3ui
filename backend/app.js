var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let os = require('os');
var cors = require('cors');
let path = require('path');
let prop_reader = require('properties-reader');

let aws_config_path = path.join(os.homedir(), '.aws/credentials');
let config = prop_reader(aws_config_path);
aws_id = config.get('default.aws_access_key_id');
aws_key = config.get('default.aws_secret_access_key');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
// var configRouter = require('./routes/api/config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('conf', {"key": aws_key, "id": aws_id});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);
// app.use('/api/config', configRouter);

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
