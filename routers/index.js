const router = require('express').Router()


router.use('/api/users', require('./user.router'))
router.use('/api/visitors', require('./admin.router'))




module.exports = router
