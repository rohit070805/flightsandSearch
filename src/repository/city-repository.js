const { where } = require('sequelize');
const {City} = require('../models/index');

class CityRepository{
     async createCity({name}){  // name is object thats under City Model
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Something wrong in repository layer");
                throw {error};
        }
    }
    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            });
        } catch (error) {
             console.log("Something wrong in repository layer");
        
            throw {error};
        }
    }
    async updateCity(cityId,data){
        try {
            const city = await City.update(data,{
                where:{
                    id:City
                }
            });
            return city;
        } catch (error) {
             console.log("Something wrong in repository layer");
        
            throw {error};
        }
    }
    async getCity(cityId){
        try{
            //   const city = City.findbyPk(cityId);
            const city = City.find({where:{id:cityId}});
            return city;
        }catch(error){
             console.log("Something wrong in repository layer");
        
                throw {error};
        }
    }

}
module.exports = CityRepository;