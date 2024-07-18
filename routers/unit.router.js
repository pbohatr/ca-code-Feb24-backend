
const router = require('express').Router();
const Unit = require('../controllers/unit.controller')

const Middleware = require('../services/token.service')
router.post('/createUnit',Unit.UnitSave )
router.get('/getUnits',Unit.getUnit)
router.post('/createselfUnit/:id',Unit.UnitSelfSave )
router.get('/getselfUnit/:id',Unit.getSelfUnit )



module.exports = router;
