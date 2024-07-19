
const router = require('express').Router();
const Item = require('../controllers/item.controller')
const Middleware = require('../services/token.service')

router.post('/:id/insertItem', Middleware.verifyToken, Item.ItemSave );
router.get('/:id/allItemData', Middleware.verifyToken, Item.getItem );
router.patch('/:firmId/update/:id',Middleware.verifyToken, Item.updateItem)


module.exports = router;
