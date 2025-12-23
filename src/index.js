const express = require('express');
//const {City} = require('./models/index');
const bodyParser = require('body-parser');
const CityRepository = require('./repository/city-repository');
const {PORT }=  require('./config/serviceConfig');
const city = require('./models/city');
const setupAndStartServer = async()=>{
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true})); 
 
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        const repo = new CityRepository();
       repo.createCity({name:"Jaipur"});
        //repo.deleteCity(4);
        
    })
}
setupAndStartServer();