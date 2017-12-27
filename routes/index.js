var express = require('express');
var router = express.Router();

/* GET home page. */
 router.get('/', function(req, res, next) {
  res.render('index', { title: 'allie soleil', user: 'Allie K.' });
 });


module.exports = router;
