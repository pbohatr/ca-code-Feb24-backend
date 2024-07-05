
const router = require('express').Router();
const USER = require('../controllers/user.controller')

router.post('/verify', USER.userSave)

module.exports = router;
