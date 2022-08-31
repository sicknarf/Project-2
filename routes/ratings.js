var express = require('express');
var router = express.Router();
const ratingsCtrl = require('../controllers/ratings');

router.post('/requests/:id/:id/rate', ratingsCtrl.rate);

module.exports = router;