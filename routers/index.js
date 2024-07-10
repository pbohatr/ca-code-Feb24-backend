const router = require('express').Router();

router.use('/companyRegister/auth', require('./company.router'));
router.use('/party', require('./party.router'));
router.use('', require('./category.router'));



module.exports = router;
