const createError = require('http-errors');
const express = require('express');
const indexRouter = require('./routes/index');

const app = express();
const port = process.env.PORT || "8000";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json(`error ${err.status}`);
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});