const router = require('express').Router();

router.use('/companyRegister/auth', require('./company.router'));

module.exports = router;
