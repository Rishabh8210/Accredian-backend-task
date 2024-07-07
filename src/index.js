const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('../src/config/serverConfig');

const settingAndStartingServer = async () => {
    const app = express();
    const apiRoutes = require('./routes/index')
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/api', apiRoutes);
    app.listen(PORT, () => {
        console.log(`Server is running as PORT ${PORT}`);
    })
}
settingAndStartingServer()