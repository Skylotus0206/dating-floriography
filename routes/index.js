'use strict';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home.ejs');
});

router.get('/question1', (req, res) => {
  res.render('question1.ejs');
});
router.get('/question2', (req, res) => {
  res.render('question2.ejs');
});
router.get('/question3', (req, res) => {
  res.render('question3.ejs');
});
router.get('/question4', (req, res) => {
  res.render('question4.ejs');
});

router.get('/result', (req, res) => {
  res.render('result.ejs');
});

export default router;
