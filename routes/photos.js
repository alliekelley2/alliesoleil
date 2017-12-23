var express = require('express');
var router = express.Router();

/* GET photos page. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');

    var pic = req.params;

    console.log(req.params);
    var data = {
        photoToShow: pic,
        photos: {
            1: "IMG_31242.JPG",
            2: "IMG_3184.JPG"
        }
    };
    res.render('photos', data);
});


module.exports = router;