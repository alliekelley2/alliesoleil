var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('about', {});
});


module.exports = router;