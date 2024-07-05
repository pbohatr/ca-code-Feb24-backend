const router = require('express').Router()


router.use('/api/users', require('./user.router'))

module.exports = router
