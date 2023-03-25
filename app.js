'use strict';
import express from 'express';
import dotenv from 'dotenv';

import indexRouter from './routes/index.js';

const app = express();
dotenv.config();

app.use('/', indexRouter);

// port setup
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), (req, res) => {
  console.log('Server is listening to ' + app.get('port'));
});

// error handling
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(404).send('Not Found');
});
