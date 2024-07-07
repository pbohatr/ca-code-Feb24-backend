
const router = require('express').Router();
const Company = require('../controllers/company.controller')

router.post('/signup', Company.CompanySave)
router.post('/signin', Company.Login)


module.exports = router;
