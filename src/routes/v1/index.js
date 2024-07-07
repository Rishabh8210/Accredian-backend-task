const express = require('express')
const router = express.Router()

const v1ApiUserRoutes = require('./user-routes');
const v1ApiInvitationRoutes = require('./invitation-routes');
// Routes for user 
router.use('/user/', v1ApiUserRoutes);
router.use('/invitation/', v1ApiInvitationRoutes);
module.exports = router