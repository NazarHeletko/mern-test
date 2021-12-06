const express = require('express')
const usersController = require('./users-controller')

const router = express.Router()

router.get('/', usersController.getUsersController)
router.delete('/', usersController.deleteUserController)
router.patch('/', usersController.updateUserController)
router.post('/', usersController.createUserController)

module.exports = router