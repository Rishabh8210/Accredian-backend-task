const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const NotFound = require('../errors/notfound.error')

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
            if(!user){
                throw new NotFound("User", userId);
            }
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getUser(data){
        try {
            const user = await prisma.user.findUnique({
                where:{
                    email: data
                }
            });
            if(!user){
                throw new NotFound("User", data);
            }
            return user;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getUserDetails(data){
        try {
            const user = await this.userRepository.getUserDetails(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }
}

module.exports = UserRepository;