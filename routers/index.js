const router = require('express').Router();

router.use('/companyRegister/auth', require('./company.router'));
router.use('/party', require('./party.router'));


module.exports = router;
