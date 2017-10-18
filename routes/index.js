var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'QR Code Variations' });
});

router.get('/generateqr', function(req, res, next) { //route path
    var details = 'specify parameters';
    res.render('generateqr', { title: 'Generate QR', details }); //template name
});

router.get('/recogniseqr', function(req, res, next) {
    var details = 'Save QR template and parameters';
    res.render('recogniseqr', { title: 'Recognise QR code', details });
});

router.get('/logqrattempts', function(req, res, next) {
    var details = 'Settings and Logs';
    res.render('logqrattempts', { title: 'View and load parameters', details });
});

module.exports = router;
