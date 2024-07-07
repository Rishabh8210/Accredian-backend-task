const nodemailer = require('nodemailer')
const {google} = require('googleapis')

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2CLient = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2CLient.setCredentials({refresh_token: REFRESH_TOKEN})

async function sendMailTo(data){
    try{
        const accessToken = await oAuth2CLient.getAccessToken()
        console.log(data);
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'rishabhpandey8092@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })
        const mailOptions = {
            from: `no reply - <>`,
            to: `${data.emailTo}`,
            subject: `Hey, I am inviting you to join these beautiful ${data.course}`,
            text: `${data.description}`,
            html: `<p>${data.description}</p>`
        }
        console.log(mailOptions)
        const  result = await transport.sendMail(mailOptions)
        return result
    }catch(error){
        return error
    }
}

module.exports = {
    sendMailTo
}