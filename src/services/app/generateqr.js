var express = require('express');
var router = express.Router();
var qrCode = require('qrcode')

router.get('/', function(req, res, next) { //route path
    var details = 'specify parameters';
    res.render('generateqr', { title: 'Generate QR', details }); //template name


});



module.exports = router;

