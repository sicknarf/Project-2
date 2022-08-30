var express = require('express');
var router = express.Router();
var responsesCtrl = require('../controllers/responses')

router.get('/requests/:id/responses/new', responsesCtrl.new);
router.post('/requests/:id/responses', responsesCtrl.create);
router.get('/requests/:id/:id', responsesCtrl.show);

module.exports = router;