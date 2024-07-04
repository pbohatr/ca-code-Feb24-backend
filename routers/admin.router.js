
const router = require('express').Router();
const USER = require('../controllers/admin.controller')

router.post('/adminlogin', USER.adminLogin)




module.exports = router;
