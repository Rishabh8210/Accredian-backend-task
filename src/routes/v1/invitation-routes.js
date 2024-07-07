const express = require('express')
const router = express.Router()

const {createInvitation, getInvitation, getAllInvitations} = require('../../controllers/index')
router.get('/:id', getInvitation);
router.post('/', createInvitation);
module.exports = router