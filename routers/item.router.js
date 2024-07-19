
const router = require('express').Router();
const Item = require('../controllers/item.controller')
const Middleware = require('../services/token.service')


router.post('/addSale',Item.SaletaxSave )
router.post('/addprice',Item.SalepriceSave )
router.post('/additem/:id',Middleware.verifyToken,Item.ItemSave )






module.exports = router;
