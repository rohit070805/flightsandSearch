const express = require('express');
//const {City} = require('./models/index');
const bodyParser = require('body-parser');
const {PORT }=  require('./config/serviceConfig');

const ApiRoutes = require('./routes/index');
const setupAndStartServer = async()=>{
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true})); 
    app.use('/api',ApiRoutes);
    // it will for all routes starting from /api the go in APIRoutes where based on url the routes are divided into v1 and v2
    // now for api/v1 it will got to routes/v1/index.js and all the routes of v1 are defined here
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
       
        
    })
}
setupAndStartServer();