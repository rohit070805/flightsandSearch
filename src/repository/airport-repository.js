const { where } = require('sequelize');
const {Airport} = require('../models/index');
const { Op } = require('sequelize');
const airport = require('../models/airport');
class AirportRepository{
    
     async createAirport(data){  
        try{
             
            const airport= await Airport.create(data);
            return airport;
        }catch(error){
            console.log("Something wrong in repository layer");
                throw {error};
        }
    }
    async deleteAirport(airportId){
        try {
            await Airport.destroy({
                where:{
                    id:airportId
                }
            });
        } catch (error) {
             console.log("Something wrong in repository layer");
        
            throw {error};
        }
    }
    async updateAirport(airportId,data){
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name = data.name;
            airport.address= data.address;
            airport.save();
            return airport;
        } catch (error) {
             console.log("Something wrong in repository layer");
        
            throw {error};
        }
    }
    async getAirport(airportId){
        try{
            const airport = Airport.findByPk(airportId);
           
            return airport;
        }catch(error){
             console.log("Something wrong in repository layer");
        
                throw {error};
        }
    }
    async getAllAirports(filter){
        try{
            if(filter.name){
            const airport = Airport.findAll({
                where:{
                    name:{
                        [Op.startsWith]:filter.name
                    }
                }
            });
            return airport;
        }
        const  airports = Airport.findAll();
        return airports;
          

            
        }catch(error){
             console.log("Something wrong in repository layer");
        
                throw {error};
        }
    }

}
module.exports = AirportRepository;
