const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class InvitationRepository{
    async createInvitation(data){
        try {
            const user = await prisma.invitation.create({ data });
            return user;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getInvitation(invId){
        try {
            const user = await prisma.invitation.findUnique({
                where:{
                    invId
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getAllInvitations(userId){
        try {
            const user = await prisma.invitation.findMany({
                where:{
                    userId
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

}

module.exports = InvitationRepository;