const router = require('express').Router();
const ctrl = require('../controllers');
const passport = require('passport');

router.get('/test', ctrl.user.test);
router.post('/register', ctrl.user.register);
router.post('/login', ctrl.user.login);
router.get('/profile', passport.authenticate('jwt', { session: false }), ctrl.user.profile); // session: false ???
router.get('/messages', passport.authenticate('jwt', { session: false }), ctrl.user.messages); // session: false ???

// task routes

router.get('/tasks', ctrl.task.index);
router.post('/tasks/create', ctrl.task.create);
router.put('/tasks/update', ctrl.task.update);
router.delete('/tasks/destroy', ctrl.task.destroy);

module.exports = router;