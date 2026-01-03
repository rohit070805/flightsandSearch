const { where } = require('sequelize');

const {Flights} = require('../models/index');
const { Op } = require('sequelize');
const CrudRepository = require('./crud-repository');

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flights);
    }
    // # means a private function
    #createFilter(data){
        let filter = {}
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
         if(data.minPrice && data.maxPrice){
            Object.assign(filter,{price:{[Op.between]:[data.minPrice,data.maxPrice]}});
            return filter;
        }
        if(data.minPrice){
            Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
        }
        // agr dono hone to price filter overwrite ho jayega by max so change krna pdega,in case both are ther
       
        return filter;
    }
   
    async getAllModels(filter){
        try {
           const filterObject = this.#createFilter(filter);
           const flights = Flights.findAll({
            where:filterObject,
         } );
        //  it means same as,using if conditions also
        //  const flights = Flights.findAll({
        //     where:{
        //           arrivalAirportId = filter.arrivalAirportId,
        //              departureAirportId = filter.departureAirportId,
        //              price:{[Op.gte]:filter.minPrice}
        //              price:{[Op.lte]:filter.maxPrice}
        //              price:{[Op.between]:[filter.minPrice,filter.maxPrice]}
        //         },
        //  } );
           return flights;
            }
         catch (error) {
             console.log("Something wrong in repository layer");
            throw {error};
        }
    }
}
module.exports = FlightRepository;