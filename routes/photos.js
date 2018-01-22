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
    var photos = ["31242.jpg", "3184.jpg", "31222.jpg", "31922.jpg", "31772.jpg", "31942.jpg", "4925.jpg",
                    "3489.jpg", "5039.jpg", "4928.jpg", "3275.jpg", "31212.jpg", "3580.jpg", "9026.jpg",
                    "9097.jpg", "9130.jpg", "9084.jpg", "9085.jpg", "9142.jpg", "9146.jpg", "9087.jpg", "9089.jpg",
                    "9100.jpg", "9147.jpg", "9088.jpg", "9099.jpg", "9095.jpg", "9107.jpg", "9033.jpg",
                    "9035.jpg", "9092.jpg", "9090.jpg", "8992.jpg", "8999.jpg", "3579.jpg", "9449.jpg",
                    "8991.jpg", "8977.jpg", "9002.jpg", "8988.jpg", "9065.jpg", "9501.jpg", "9272.jpg",
                    "9230.jpg", "8699.jpg", "8695.jpg", "8682.jpg", "8681.jpg"]; //array of photos on traveling page

    var otherPics = ["8518.jpg", "8519.jpg", "8520.jpg", "8517.jpg", "3471.jpg", "3467.jpg", "3481.jpg", "3447.jpg",
                    "3476.jpg", "3480.jpg", "3483.jpg", "3449.jpg", "8899.jpg", "8889.jpg", "8883.jpg"]; //array of photos on other page


    var photosObject = {
        travelingPics: ["31242.jpg", "3184.jpg", "31222.jpg", "31922.jpg", "31772.jpg", "31942.jpg", "4925.jpg",
            "3489.jpg", "5039.jpg", "4928.jpg", "3275.jpg", "31212.jpg", "3580.jpg", "9026.jpg",
            "9097.jpg", "9130.jpg", "9084.jpg", "9085.jpg", "9142.jpg", "9146.jpg", "9087.jpg", "9089.jpg",
            "9100.jpg", "9147.jpg", "9088.jpg", "9099.jpg", "9095.jpg", "9107.jpg", "9033.jpg",
            "9035.jpg", "9092.jpg", "9090.jpg", "8992.jpg", "8999.jpg", "3579.jpg", "9449.jpg",
            "8991.jpg", "8977.jpg", "9002.jpg", "8988.jpg", "9065.jpg", "9501.jpg", "9272.jpg",
            "9230.jpg", "8699.jpg", "8695.jpg", "8682.jpg", "8681.jpg"],
        otherPics: ["8518.jpg", "8519.jpg", "8520.jpg", "8517.jpg", "3471.jpg", "3467.jpg", "3481.jpg", "3447.jpg",
            "3476.jpg", "3480.jpg", "3483.jpg", "3449.jpg", "8899.jpg", "8889.jpg", "8883.jpg"]
    }

    var album = photosObject[albumId];
    var nextPic = 0;
    //var previousPic = photos.length - 1;
    var previousPic = album.length - 1;
    //var photo = prefix + photos[picIndex];
    var photo = prefix + album[picIndex];



    // Set the next pic and the previous pic
    if (picIndex === 0 || picIndex < 0 || picIndex > photos.length - 1) {
        nextPic = 2;  // should be one more than the array index
        previousPic = photos.length;
        photo = prefix + photos[0]; // set picture to 1st pic in array if user inputs id out of array's bounds
    } else if (picIndex >= photos.length - 1) {
        nextPic = 1;  // The first picture
    } else if (picIndex > photos.length) {
        previousPic = photos.length; // the last picture
    } else {
        nextPic = picId + 1; //the next one in array
        previousPic = picId - 1; //the previous one in array
    }

     /*Set the previous pic
    if (picIndex === 0) {
        previousPic = photos.length;
    } else if (picIndex > photos.length) {
        previousPic = photos.length;
    } else {
        previousPic = picId - 1;
    }

    if (picId < photos.length && picId >= 1) {
        nextPic = Number(picId) + 1;
        previousPic = Number(picId) - 1;
    }*/


    var data = {
       // picId: picIndex, // now adjusted for the array index
       // photo: prefix + photos[picId - 1], //concatenate with constant prefix so you don't have to type path each time
        photo: photo,
        nextPic: nextPic,
        previousPic: previousPic,
        title: "alliesoleil",
        albumId: albumId
    };



    res.render('photos', data);
});


module.exports = router;