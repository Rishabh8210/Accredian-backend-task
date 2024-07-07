const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const NotFound = require('../errors/notfound.error')

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
                    invitationId: invId
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
                    userId: userId
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