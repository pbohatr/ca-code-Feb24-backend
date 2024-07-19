
const router = require('express').Router();
const Category = require('../controllers/category.controller')

const Middleware = require('../services/token.service')
router.post('/createCategoryName/:id',Middleware.verifyToken,Category.CategorySave )
router.get('/getAllCategoryName',Middleware.verifyToken,Category.getAllCategory)
router.get('/getCategoryName/:id',Category.getCategory)
router.delete('/deletecategory/:id', Category.CategoryDelete);
// router.patch('/patchCategory/:id',Category.changeCategory)
router.patch('/:firmId/patchCategory/:id',Middleware.verifyToken, Category.changeCategory)


module.exports = router;
  