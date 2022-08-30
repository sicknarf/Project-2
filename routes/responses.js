var express = require('express');
var router = express.Router();
var responsesCtrl = require('../controllers/responses')

router.get('/requests/:id/responses/new', responsesCtrl.new);
// http://localhost:3000/requests/630d6485fdf359e4c115f05f/responses
router.post('/requests/:id/responses', responsesCtrl.create);

module.exports = router;