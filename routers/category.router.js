
const router = require('express').Router();
const Category = require('../controllers/category.schema')

const Middleware = require('../services/token.service')
router.post('/createCategoryName/:id',Middleware.verifyToken,Category.CategorySave )
router.get('/getAllCategoryName',Middleware.verifyToken,Category.getAllCategory)
router.get('/getCategoryName/:id',Category.getCategory)

module.exports = router;
