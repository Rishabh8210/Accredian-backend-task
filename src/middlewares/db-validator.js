const { PrismaClient } = require('@prisma/client');
const { StatusCodes } = require('http-status-codes');
const DbConnectionFailure = require('../errors/dbconnectionfailure.error')
const prisma = new PrismaClient();

async function dbValidator(req, res, next) {
    try {
        await prisma.$connect(); 
        next();
    } catch (err) {
        console.error('Database connection error:', err);
        return res.status(StatusCodes.BAD_GATEWAY).json({
            data: {},
            success: false,
            message: 'Database is not able to establish connection',
            err: new DbConnectionFailure()
        });
    }
}

module.exports = dbValidator;