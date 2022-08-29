var express = require('express');
var router = express.Router();
const requestsCtrl = require('../controllers/requests');

router.get('/', requestsCtrl.index);
router.get('/new', requestsCtrl.new);
router.post('/', requestsCtrl.create);
router.get('/:id', requestsCtrl.show)

module.exports = router;