var express = require('express');
var router = express.Router();

/* GET photos page. */
router.get('/:id', function(req, res, next) {
    //res.send('respond with a resource');

    var picId = req.params.id;
    var photos = {
        1: "../images/IMG_31242.jpg",
        2: "../images/IMG_3184.jpg"
    }

    var data = {
        picId: picId,
        myVar: "foo",
        photo: photos[picId],
        nextPic: 2

    };

    res.render('photos', data);
});


module.exports = router;