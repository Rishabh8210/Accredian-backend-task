const { InvitationRepository } = require('../repository/index')
class InvitationService{
    constructor(){
        this.invitationService = new UserRepository()
    }
    async createUser(data){
        try {
            const invite = await this.invitationService.createInvitation(data);
            return invite;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }
}

module.exports = InvitationService;