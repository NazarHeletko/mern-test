const express = require('express')
const rolesController = require('./groups-controller')

const router = express.Router()

router.get('/', rolesController.getRolesController)
router.delete('/', rolesController.deleteRolesController)
router.post('/', rolesController.addRolesController)
router.put('/', rolesController.updateRolesController)

module.exports = router