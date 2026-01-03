
const {City} = require('../models/index');
const { Op } = require('sequelize');
const  CrudRepository = require('./crud-repository');
class CityRepository extends CrudRepository{
    constructor(){
        super(City);
    }
  
    async getAllModels(filter){
        try{
            if(filter.name){
            const cities = City.findAll({
                where:{
                    name:{
                        [Op.startsWith]:filter.name
                    }
                }
            });
            return cities;
        }
        const  cities = City.findAll();
        return cities;
          

          
        }catch(error){
             console.log("Something wrong in repository layer");
        
                throw {error};
        }
    }

}
module.exports = CityRepository;