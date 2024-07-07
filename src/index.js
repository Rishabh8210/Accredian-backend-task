const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('../src/config/serverConfig');

const settingAndStartingServer = async () => {
    const app = express();
    // const { PrismaClient } = require('@prisma/client')
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(cors());



    app.listen(PORT, () => {
        console.log(`Server is running as PORT ${PORT}`);
    })
}
settingAndStartingServer()