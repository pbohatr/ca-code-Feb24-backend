
const router = require('express').Router();
const Unit = require('../controllers/unit.controller')

const Middleware = require('../services/token.service')
router.post('/createUnit',Middleware.verifyToken,Unit.UnitSave )
router.get('/getUnits',Middleware.verifyToken,Unit.getUnit)
router.post('/createselfUnit/:id',Middleware.verifyToken,Unit.UnitSelfSave )
router.get('/getselfUnit/:id',Middleware.verifyToken,Unit.getSelfUnit )
router.patch('/:firmId/patchUnit/:id',Middleware.verifyToken, Unit.changeUnit)
router.delete('/:firmId/deleteUnit/:id',Middleware.verifyToken, Unit.unitRemove)



module.exports = router;
