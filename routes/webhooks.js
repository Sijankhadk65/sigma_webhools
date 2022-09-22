var express = require('express');
var router = express.Router();

/* POST webook. */
router.post('/', function (req, res, next) {
    res.send('Webhooks POST');
});

/* GET webook. */
router.get('/', function (req, res, next) {
    res.send('Webhooks GET');
});

module.exports = router;
