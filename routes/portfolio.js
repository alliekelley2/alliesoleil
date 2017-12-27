var express = require('express');
var router = express.Router();

/* GET portfolio page. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
   res.render('portfolio', {name: "Peter", title: "allie soleil"});
});

module.exports = router;