
const router = require('express').Router();
const Party = require('../controllers/party.controller')
const Middleware = require('../services/token.service')

router.post('/:id/addparty',Middleware.verifyToken, Party.PartySave)




module.exports = router;
