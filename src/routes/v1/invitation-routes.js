const express = require('express')
const router = express.Router()

const {createInvitation, getInvitation, getAllInvitations} = require('../../controllers/index')
router.post('/', createInvitation);
router.get('/:invId', getInvitation);
router.get('/:userId', getAllInvitations);
module.exports = router