var express = require('express');
var router = express.Router();

var qr_image = require('qr-image');

/* GET users listing. */
router.get('/:first/:second/:third', function (req, res, next) {
    var temp_qrcode = qr_image.image('http://180.97.203.111:6001/mobile.html?'
        + "first=" + encodeURIComponent(req.params.first)
        + "&second=" + encodeURIComponent(req.params.second)
        + "&third=" + encodeURIComponent(req.params.third));
    res.type('png');
    temp_qrcode.pipe(res);
});

module.exports = router;
