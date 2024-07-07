const dotEnv = require('dotenv')
dotEnv.config()
module.exports = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    CLIENT_ID : process.env.CLIENT_ID,
    CLIENT_SECRET : process.env.CLIENT_SECRET,

    REDIRECT_URI : process.env.REDIRECT_URI,
    REFRESH_TOKEN : process.env.REFRESH_TOKEN
}