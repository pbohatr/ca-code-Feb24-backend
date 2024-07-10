
const router = require('express').Router();
const Category = require('../controllers/category.schema')

const Middleware = require('../services/token.service')
router.post('/:id/createCategoryName',Middleware.verifyToken,Category.CategorySave )




module.exports = router;
