var express = require('express');
var router = express.Router();
const requestsCtrl = require('../controllers/requests');

router.get('/', requestsCtrl.index);
router.get('/new', requestsCtrl.new);
router.get('/:id', requestsCtrl.show)
router.post('/', requestsCtrl.create);

module.exports = router;