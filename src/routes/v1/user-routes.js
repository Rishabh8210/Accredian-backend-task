const express = require('express')
const router = express.Router()

const {createUser, deleteUser} = require('../../controllers/index')

router.post('/user', createUser);
router.delete('/user/:id', deleteUser)
module.exports = router