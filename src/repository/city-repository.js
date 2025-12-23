const { where } = require('sequelize');
const {City} = require('../models/index');

class CityRepository{
     async createCity({name}){  // name is object thats under City Model
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
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
            throw {error};
        }
    }
    async getCity(cityId){
        try{
            const city = City.find({where:{id:cityId}});
            return city;
        }catch(error){
                throw {error};
        }
    }

}
module.exports = CityRepository;