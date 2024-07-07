const { InvitationService } = require('../services/index');

const invitationService = new InvitationService()

const createInvitation = async (req, res) => {
    try {
        console.log(req.body);
        const city = await invitationService.createInvitation(req.body)
        return res.status(201).json({
            data:city,
            success:true,
            message: 'Successfully created a Invitation',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Not able to create a Invitation',
            err: error
        });
    }
}   


const getInvitation = async (req, res) => {
    try {
        const id = req.params.id;
        const city = await invitationService.getInvitation(id)
        return res.status(200).json({
            data:city,
            success:true,
            message: 'Successfully fetched a Invitation',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Not able to fetched a Invitation',
            err: error
        });
    }
}   

const getAllInvitations = async (req, res) => {
    try {
        const id = req.params.id;
        const city = await invitationService.getAllInvitations(id)
        return res.status(200).json({
            data:city,
            success:true,
            message: 'Successfully fetched all Invitations',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Not able to fetched all Invitations',
            err: error
        });
    }
}   

module.exports = {
    createInvitation,
    getInvitation,
    getAllInvitations
}