const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.example.index);
router.get('/:id', ctrl.example.show);
router.post('/', ctrl.example.create);

/////////////// query ////////////////////
router.post('/query', ctrl.example.query);
//////////////////////////////////////////

router.put('/:id', ctrl.example.update);
router.delete('/:id', ctrl.example.destroy);

// exports
module.exports = router;
