var express = require('express');
var router = express.Router();

var qr_image = require('qr-image');

/* GET users listing. */
router.get('/:first/:second/:third', function (req, res, next) {
    var temp_qrcode = qr_image.image('http://www.baidu.com?'
        + "first=" + req.params.first
        + "&second=" + req.params.second
        + "&third=" + req.params.third);
    res.type('png');
    temp_qrcode.pipe(res);
});

module.exports = router;
