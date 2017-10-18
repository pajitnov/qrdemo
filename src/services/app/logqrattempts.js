var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var details = 'Settings and Logs';
    res.render('logqrattempts', { title: 'View and load parameters', details });
});

module.exports = router;
