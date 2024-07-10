
const router = require('express').Router();
const Company = require('../controllers/company.controller')
const Middleware = require('../services/token.service')

router.post('/signup', Company.CompanySave)
router.post('/signin', Company.Login)
router.get('/getfirm', Middleware.verifyToken, Company.getFirm)
router.post('/firm_registration',Middleware.verifyToken,Company.addFirm)
router.put('/update_firm/:id',Middleware.verifyToken,Company.editFirm)
router.post('/firm_registration', Middleware.verifyToken, Company.addFirm)
router.put('/update_firm/:id', Middleware.verifyToken, Company.editFirm)





module.exports = router;
