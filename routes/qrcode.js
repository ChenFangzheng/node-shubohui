var express = require('express');
var router = express.Router();

// var qr_image = require('qr-image');
var fs = require('fs'),
    qrCodeLogo = require('qrcode-logo');

/* GET users listing. */
router.get('/:first/:second/:third', function (req, res, next) {
    /* var temp_qrcode = qr_image.image('http://180.97.203.111:6001/mobile.html?'
         + "first=" + encodeURIComponent(req.params.first)
         + "&second=" + encodeURIComponent(req.params.second)
         + "&third=" + encodeURIComponent(req.params.third));
     res.type('png');
     temp_qrcode.pipe(res);
     */

    var url = 'http://180.97.203.111:6001/mobile.html?'
        + "first=" + encodeURIComponent(req.params.first)
        + "&second=" + encodeURIComponent(req.params.second)
        + "&third=" + encodeURIComponent(req.params.third);

    var qrcodeImgFilePath = '/home/fangzheng/workspace/git/node-shubohui/public/images/logo.png';
    var logoBuffer = fs.readFileSync('/home/fangzheng/workspace/git/node-shubohui/images/iss.PNG', {
        encoding: null
    });

    qrCodeLogo(url, qrcodeImgFilePath, {
        size: 5,  // 二维码单位块大小
        logo: logoBuffer, // logo数据
        logoBorder: {   // border边框配置 
            width: 4,
            color: 0xcccfff
        }
    }, function (err, img) {
        fs.readFile('/home/fangzheng/workspace/git/node-shubohui/public/images/logo.png', function (err, data) {
            if (err) throw err; // Fail if the file can't be read.

            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(data); // Send the file data to the browser.
        });
    });
});

module.exports = router;
