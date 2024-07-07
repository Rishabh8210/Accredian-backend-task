const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserRepository{
    async createUser(data){
        try {
            const user = await prisma.user.create({ data });
            return user;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async deleteUser(userId){
        try {
            const user = await prisma.user.delete({
                where:{
                    userId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }


}

module.exports = UserRepository;