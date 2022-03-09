var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
require('dotenv').config();
const isValidToken = require('../middleware/isValidToken');
const axios = require('axios');

// /* GET home page. */
// router.get('/', async function(req, res, next) {

//   const data = await axios.get('https://the-one-api.dev/v2/book/2')
//     .then(function (response) {
//       // handle success
//       console.log(response.data);
//       return response.data
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });

//   res.render('index', { title: 'Express' });
// });

/* GET home page. */
router.get("/", async function (req, res, next) {
	// GET data from remote API
	// Save as variable

	var config = {
		method: "get",
		url: "https://nashvillecats-814a1-default-rtdb.firebaseio.com/books/-MxbBA3fSa6AGhhlVXNR.json",
		headers: {},
	};

	const book = await axios(config)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
	console.log(book);

	res.render("index", { title: "Express", book });
});

router.get("/login", function (req, res, next) {
	res.render("login");
});

router.get("/register", async function (req, res, next) {
	res.render("register");
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
