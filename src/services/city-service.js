const {CityRepository}= require('../repository/index');
const CrudService = require('./crud-service');

class CityService extends CrudService{
    constructor(){
        const cityRepository = new CityRepository(); 
        super(cityRepository);
        this.cityRepository = cityRepository;
        
    }
   
    async getAllService(filter){
        try {
            const cities = await this.cityRepository.getAllModels(filter);
            return cities;
        } catch (error) {
            console.log("something wrong in service layer");
            throw {error};
        }
    }
}
module.exports = CityService; 