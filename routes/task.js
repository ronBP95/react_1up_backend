const router = require('express').Router();
const ctrl = require('../controllers/');

router.get('/', ctrl.task.index);

module.exports = router;