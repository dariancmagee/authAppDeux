var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
require('dotenv').config();
const isValidToken = require('../middleware/isValidToken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});


router.get('/profile', isValidToken, function(req, res, next) {
  res.render('profile', { name: 'Express' });
});




module.exports = router;
