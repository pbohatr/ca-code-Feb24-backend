const router = require('express').Router();

router.use('/companyRegister/auth', require('./company.router')); // Correct path

module.exports = router;
