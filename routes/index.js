'use strict';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home.ejs');
});

router.get('/question', (req, res) => {
  res.render('question.ejs');
});

export default router;
