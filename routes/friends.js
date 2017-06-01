var express = require('express');
var router = express.Router();

/* GET friends page. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('friends', {name: "Peter"});
});

module.exports = router;