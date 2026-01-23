const express = require('express');
//const {City} = require('./models/index');
const bodyParser = require('body-parser');
const {PORT }=  require('./config/serviceConfig');
const {Airport,City} = require('./models/index');
const ApiRoutes = require('./routes/index');
const setupAndStartServer = async()=>{
    const app = express();
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true})); 
   
    app.use('/flightservice/api',ApiRoutes);
    // it will for all routes starting from /api the go in APIRoutes where based on url the routes are divided into v1 and v2
    // now for api/v1 it will got to routes/v1/index.js and all the routes of v1 are defined here
    app.listen(PORT,async()=>{
        console.log(`Server started at ${PORT}`);

         
   

    })
}
setupAndStartServer();


 
 // Get airports,also including city details
    //    const airport= await Airport.findAll({
    //     include:[{
    //         model:City
    //     }]
    //    });
    //    console.log(airport);


    // get all airports of a particular city (i.e Joins in sql)
    //   const city = await City.findOne({
    //     where:{
    //         id:18
    //     }
    //   });
    //   const airports = await city.getAirports();
    // await City.addAirport({
    //     name:"Jiandal Vijaynagar Airport"
    // })
    //   console.log(airports);