var express = require('express');
var router = express.Router();

/* GET traveling page. */
router.get('/', function(req, res, next) {
    res.render('traveling', {title: "allie soleil"});
});

module.exports = router;
