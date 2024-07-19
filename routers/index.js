const router = require('express').Router();

router.use('/companyRegister/auth', require('./company.router'));
router.use('/party', require('./party.router'));
router.use('/category', require('./category.router'));
router.use('/unit', require('./unit.router'));
router.use('/item', require('./item.router'));



module.exports = router;
 