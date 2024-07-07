const express = require('express')
const router = express.Router()

const {createUser, deleteUser, getUser, getUserDetail, sendMail} = require('../../controllers/index')
const authenticateToken = require('../../middlewares/authenticateToken');

router.post('/signup', createUser);
router.post('/signin',  getUser);
router.get('/profile', authenticateToken, getUserDetail); //
router.delete('/:id', deleteUser)
router.post('/mail', sendMail)
module.exports = router

