var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/requests/:id/:id', commentsCtrl.create);
router.delete('/requests/:id/:id/:id', commentsCtrl.delete)
router.get('/requests/:id/:id/:id/edit', commentsCtrl.edit)
router.put('/requests/:id/:id/:id/edit', commentsCtrl.update)

module.exports = router;