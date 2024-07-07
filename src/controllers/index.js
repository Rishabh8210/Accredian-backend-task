const {createUser, deleteUser, getUser, getUserDetail, sendMail} = require('./user-controller')
const {createInvitation, getInvitation, getAllInvitations} = require('./invitation-controller')

module.exports = {
    createUser,
    deleteUser,
    getUser,
    createInvitation,
    getInvitation,
    getAllInvitations,
    getUserDetail,
    sendMail
}