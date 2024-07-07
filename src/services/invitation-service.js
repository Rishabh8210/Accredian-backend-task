const { InvitationRepository } = require('../repository/index')
class InvitationService{
    constructor(){
        this.invitationService = new InvitationRepository()
    }
    async createInvitation(data){
        try {
            const invite = await this.invitationService.createInvitation(data);
            return invite;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async getInvitation(invId){
        try {
            const invitation = await this.invitationService.getInvitation(invId);
            return invitation;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async getAllInvitations(userId){
        try {
            const invitations = await this.invitationService.getAllInvitations(userId);
            return invitations;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }
}

module.exports = InvitationService;