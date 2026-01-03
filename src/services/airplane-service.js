const CrudService = require('./crud-service');
const {AirplaneRepository, AirportRepository} = require('../repository/index');

class AirplaneService extends CrudService{
    constructor(){
        const airplaneRepository = new AirportRepository();
        super(airplaneRepository)
    }
}
module.exports = AirplaneService;