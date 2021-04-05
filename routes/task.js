const router = require('express').Router();
const ctrl = require('../controllers/');

router.get('/', ctrl.task.index);
router.post('/create', ctrl.task.create);

module.exports = router;