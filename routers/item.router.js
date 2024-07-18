
const router = require('express').Router();
const Item = require('../controllers/item.controller')

router.post('/addSale',Item.SaletaxSave )
router.post('/addprice',Item.SalepriceSave )





module.exports = router;
