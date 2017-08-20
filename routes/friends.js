/**
 * Created by allie on 7/31/17.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('friends', {});
});

module.exports = router;
