var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose')

///////////////////////////////////// Conectar ao mongodb /////////////////////////////////////
var mongoDB = 'mongodb://127.0.0.1:27017/contratos'
mongoose.connect(mongoDB)
var db = mongoose.connection
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB'))
db.once('open', () => {console.log("Conexão ao MongoDB realizada com sucesso")})
///////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////// Rotas ////////////////////////////////////////////
var indexRouter = require('./routes/index');
var contratosRouter = require('./routes/contratos');
///////////////////////////////////////////////////////////////////////////////////////////////



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//////////////////////////////////////////// Rotas ////////////////////////////////////////////
app.use('/', indexRouter);
app.use('/contratos', contratosRouter);
///////////////////////////////////////////////////////////////////////////////////////////////


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
