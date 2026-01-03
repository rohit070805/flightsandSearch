const {FlightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime} =require('../utils/helper');
const CrudService = require('./crud-service');
class FlightService extends CrudService{
    constructor(){
            const flightRepository = new FlightRepository();
            super(flightRepository);
            this.airplaneRepository  = new AirplaneRepository();
            this.flightRepository = flightRepository;
    }
    async createService(data){
        try{
             if(!compareTime(data.arrivalTime,data.departureTime)){
                    throw {error:'Arrival time cant be less than departure time'}
             }
             const airplane = await this.airplaneRepository.getModel(data.airplaneId);
            const flight = await this.flightRepository.createModel({... data,totalSeats:airplane.capacity});
            return flight;
        }catch(error){
            console.log("Something wrong at service layer");
            throw {error};
        }
    }
    async getAllService(data){
            try {
                const flights = await this.flightRepository.getAllModels(data);
                return flights;
            } catch (error) {
                 console.log("Something wrong at service layer");
            throw {error};
            }
    }
}
module.exports = FlightService;