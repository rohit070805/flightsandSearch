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
            // this will only return the number of rows changed
            // const city = await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // });

            // this will return the actual city as well
            const city = await City.findByPk(cityId);
            city.name = data.name;
            city.save();
            return city;
            return city;
        } catch (error) {
             console.log("Something wrong in repository layer");
        
            throw {error};
        }
    }
    async getCity(cityId){
        try{
            const city = City.findByPk(cityId);
           // const city = City.find({where:{id:cityId}});

            return city;
        }catch(error){
             console.log("Something wrong in repository layer");
        
                throw {error};
        }
    }

}
module.exports = CityRepository;