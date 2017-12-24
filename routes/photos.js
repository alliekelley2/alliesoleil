var express = require('express');
var router = express.Router();

/* GET photos page. */
router.get('/:id', function(req, res, next) {
    //res.send('respond with a resource');
    //res.redirect('/');

    var picId = req.params.id;
    const prefix = "../images/img_"; //beginning of the image source of every photo
    var photos = ["31242.jpg", "3184.jpg", "31222.jpg", "31922.jpg", "31772.jpg", "31942.jpg", "4925.jpg",
                    "3489.jpg", "5039.jpg", "4928.jpg", "3275.jpg", "31212.jpg", "3580.jpg", "9026.jpg",
                    "9097.jpg", "9130.jpg", "9084.jpg", "9085.jpg", "9142.jpg", "9146.jpg", "9033.jpg",
                    "9035.jpg", "9092.jpg", "9090.jpg", "8992.jpg", "8999.jpg", "3579.jpg", "9449.jpg",
                    "8991.jpg", "8977.jpg", "9002.jpg", "8988.jpg", "9065.jpg", "9501.jpg", "9272.jpg",
                    "9230.jpg", "8699.jpg", "8695.jpg", "8682.jpg", "8681.jpg"];

    var nextPic = 1;

    if (picId < photos.length - 1) {
        nextPic = Number(picId) + 1;
    }


    var data = {
        picId: picId,
        photo: prefix + photos[picId-1], //concatanate with constant prefix so you don't have to type path each time
        nextPic: nextPic
    };


    res.render('photos', data);
});


module.exports = router;