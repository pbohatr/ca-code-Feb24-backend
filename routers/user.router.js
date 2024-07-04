
const router = require('express').Router();
const USER = require('../controllers/user.controller')
const { imageUploadMiddleware } = require('../services/multer.service');

router.post('/verify', USER.addverify)
router.post('/addvisitor',imageUploadMiddleware('photo'), USER.addVisitor)
router.post('/addvisit', USER.addVisit)
router.get('/getallVisitors', USER.getVisitors)
router.put('/editVisitor/:id',imageUploadMiddleware('photo'), USER.addVisitor)
router.get('/getvisit/:id', USER.getVisitor)





module.exports = router;
