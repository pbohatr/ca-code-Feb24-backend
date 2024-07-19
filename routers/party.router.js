
const router = require('express').Router();
const Party = require('../controllers/party.controller')
const Middleware = require('../services/token.service')

router.post('/:id/addparty', Middleware.verifyToken, Party.PartySave)
router.get('/:id/getAllData', Middleware.verifyToken, Party.getParties)
router.patch('/:firmId/update/:id',Middleware.verifyToken, Party.updateParty)


module.exports = router;
