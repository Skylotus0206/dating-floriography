'use strict';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import indexRouter from './routes/index.js';

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/', indexRouter);

app.use(express.static(path.join(__dirname, 'public')));

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
