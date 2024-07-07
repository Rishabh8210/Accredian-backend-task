const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const JWT_SECRET = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: 'No token provided.'
        }); 
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(StatusCodes.FORBIDDEN).json({
                success: false,
                message: 'Failed to authenticate token.'
            });
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;