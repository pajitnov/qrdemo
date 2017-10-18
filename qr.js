var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

var srcpath = './src/services/app/';
var index = require(srcpath + 'index');
var users = require(srcpath + 'users');
var recogniseqr = require(srcpath + 'recogniseqr');
var generateqr = require(srcpath + 'generateqr');
var logqrattempts = require(srcpath + 'logqrattempts')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/client/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, '/build/client'),
  dest: path.join(__dirname, '/build/client'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, '/build/client')));

app.use('/', index);
app.use('/recogniseqr', recogniseqr);
app.use('/generateqr', generateqr);
app.use('/logqrattempts', logqrattempts);


app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
