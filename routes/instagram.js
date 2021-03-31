const router = require('express').Router();
const ctrl = require('../controllers');
const multer = require('multer');
const uploads = multer({ dest: './uploads'});


// routes
router.get('/', ctrl.instagram.index);

///////////////  using cloudinary inside route ///////////////////////
router.post('/', uploads.single('something'), ctrl.instagram.create);
/////////////////////////////////////////////////////////////////////

module.exports = router;