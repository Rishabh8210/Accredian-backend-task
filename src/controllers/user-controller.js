const { UserService } = require('../services/index');

const userService = new UserService()

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const city = await userService.createUser(req.body)
        return res.status(201).json({
            data:city,
            success:true,
            message: 'Successfully created a User',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Not able to create a User',
            err: error
        });
    }
}   


const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const city = await userService.deleteUser(id)
        return res.status(200).json({
            data:city,
            success:true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Not able to delete a city',
            err: error
        });
    }
}   


module.exports = {
    createUser,
    deleteUser
}