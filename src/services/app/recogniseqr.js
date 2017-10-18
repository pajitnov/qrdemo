var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var details = 'Save QR template and parameters';
    res.render('recogniseqr', { title: 'Recognise QR code', details });
});

module.exports = router;
