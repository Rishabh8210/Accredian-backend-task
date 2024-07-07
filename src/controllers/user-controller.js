const { UserService } = require('../services/index');
const { StatusCodes } = require('http-status-codes');
const {sendMailTo} = require('../services/mail-service')
const userService = new UserService()

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const saltRounds = parseInt(process.env.saltRounds);


const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const data = {
            userId: 'user-' + new Date().getTime(),
            name: name,
            email: email,
            password: hashedPassword,
            wallet: 0.0
        } 
        const newUser = await userService.createUser(data);
        return res.status(201).json({
            data:newUser,
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

const getUser = async (req, res) => {
    try {
        const { email, password } = req.body; 
        // console.log(email, password)
        const user = await userService.getUser(email)
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email.' });
        }
        console.log(user)
        const trimmedPassword = password.trim();
        console.log(trimmedPassword)
        const isPasswordValid = await bcrypt.compare(trimmedPassword, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Invalid email or password.', password: isPasswordValid});
        }
        const token = jwt.sign({ userId: user.userId, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({
            data:user,
            token: token,
            success:true,
            message: 'Successfully fetched a user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Not able to fetched a user',
            err: error
        });
    }
}   

const getUserDetail = async(req, res) => {
    
    const { email, password } = req.user;
    try{
        const user = await userService.getUser(email)
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email.' });
        }
        console.log(user)
        return res.status(200).json({
            data:user,
            success:true,
            message: 'Successfully fetched a user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Not able to fetched a user',
            err: error
        });
    }
}

const sendMail = async(req, res) => {

    // const { email } = req.user;
    const {emailTo, course, description} = req.body;
    try{
        const data = { emailTo, course, description};
        const sent = await sendMailTo(data);
        return res.status(200).json({
            data:sent,
            success:true,
            message: 'Successfully sent mail to user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Not able to sned mail to user',
            err: error
        });
    }
}

module.exports = {
    createUser,
    deleteUser,
    getUser,
    getUserDetail,
    sendMail
}