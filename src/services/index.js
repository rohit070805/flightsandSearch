const AirportService = require("./airport-service");
const CityService = require("./city-service");
const CrudService = require("./crud-service");
const AirplaneService = require('./airplane-service');
const FlightService = require("./flight-service");

module.exports = {
    CityService : require('./city-service'),
    AirportService:require('./airport-service'),
    FlightService:require('./flight-service'),
    AirplaneService:require('./airplane-service')
}