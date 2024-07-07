
const router = require('express').Router();
const Company = require('../controllers/company.controller')
const Middleware = require('../services/token.service')

router.post('/signup', Company.CompanySave)
router.post('/signin', Company.Login)
router.get('/getfirm', Middleware.verifyToken, Company.getFirm)



module.exports = router;
