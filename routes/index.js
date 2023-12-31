const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const track = require('./modules/track')
const users = require('./modules/users')
// const auth = require('./modules/auth')

// const { authenticator } = require('../middleware/auth')

router.use('/track', track)
router.use('/users', users)
// router.use('/auth', auth)
router.use('/', home)

module.exports = router
