var express = require('express');
var router = express.Router();

/* GET photos page. */
router.get('/:albumId/:id', function(req, res, next) {
    //res.send('respond with a resource');
    //res.redirect('/');

    var picId = Number(req.params.id);
    var albumId = req.params.albumId;
    var picIndex = picId - 1; // adjust picture Id for the array indexes
    const prefix = "/images/img_"; //beginning of the image source of every photo

    var photos = {
        traveling: ["31242.jpg", "3184.jpg", "31222.jpg", "31922.jpg", "31772.jpg", "31942.jpg", "4925.jpg",
            "3489.jpg", "5039.jpg", "4928.jpg", "3275.jpg", "31212.jpg", "3580.jpg", "9026.jpg",
            "9097.jpg", "9130.jpg", "9084.jpg", "9085.jpg", "9142.jpg", "9146.jpg", "9087.jpg", "9089.jpg",
            "9100.jpg", "9147.jpg", "9088.jpg", "9099.jpg", "9095.jpg", "9107.jpg", "9033.jpg",
            "9035.jpg", "9092.jpg", "9090.jpg", "8992.jpg", "8999.jpg", "3579.jpg", "9449.jpg",
            "8991.jpg", "8977.jpg", "9002.jpg", "8988.jpg", "9065.jpg", "9501.jpg", "9272.jpg",
            "9230.jpg", "8699.jpg", "8695.jpg", "8682.jpg", "8681.jpg"],
        other: ["8518.jpg", "8519.jpg", "8520.jpg", "8517.jpg", "3471.jpg", "3467.jpg", "3481.jpg", "3447.jpg",
            "3476.jpg", "3480.jpg", "3483.jpg", "3449.jpg", "8899.jpg", "8889.jpg", "8883.jpg"],
        friends: ["7203.jpg", "4102.jpg", "4100.jpg", "3429.jpg", "4105.jpg", "4099.jpg", "4101.jpg",
                    "4104.jpg", "4086.jpg"]
    }

    var album = photos[albumId];
    var nextPic = 0;
    var previousPic = album.length - 1;
    var photo = prefix + album[picIndex];



    // Set the next pic and the previous pic
    if (picIndex === 0 || picIndex < 0 || picIndex > album.length - 1) {
        nextPic = 2;  // should be one more than the array index
        previousPic = album.length;
        photo = prefix + album[0]; // set picture to 1st pic in array if user inputs id out of array's bounds
    } else if (picIndex >= album.length - 1) {
        nextPic = 1;  // The first picture
    }else if (picIndex > album.length) {
        previousPic = album.length; // the last picture
    } else {
        nextPic = picId + 1; //the next one in array
        previousPic = picId - 1; //the previous one in array
    }


    var data = {
        photo: photo,
        nextPic: nextPic,
        previousPic: previousPic,
        title: "alliesoleil",
        albumId: albumId
    };



    res.render('photos', data);
});


module.exports = router;