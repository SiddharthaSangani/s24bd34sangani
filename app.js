var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var denRouter = require('./routes/dogcookies');
var gridRouter = require('./routes/grid');
var randomRouter = require('./routes/pick');
var dogcookies = require("./models/dogcookies");
var resourceRouter = require("./routes/resource");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cookies', denRouter);
app.use('/grid', gridRouter);
app.use('/random',randomRouter);
app.use('/resource',resourceRouter);
app.use('/detail', denRouter);

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
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await dogcookies.deleteMany();
let instance1 = new
dogcookies({cookies_name:"Pedigri", cookies_for:'all',
cost:15.4});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
let instance2 = new
dogcookies({cookies_name:"Drolls", cookies_for:'Golden retrever',
cost:154});
instance2.save().then(doc=>{
console.log("second object saved")}
).catch(err=>{
console.error(err)
});
let instance3 = new
dogcookies({cookies_name:"treats", cookies_for:'labredor',
cost:15});
instance3.save().then(doc=>{
console.log("Third object saved")}
).catch(err=>{
console.error(err)
});
}
let reseed = true;
if (reseed) {recreateDB();}
module.exports = app;
