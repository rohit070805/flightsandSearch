const {FlightService} = require('../services/index');
const flightService = new FlightService();
const create = async(req,res)=>{
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(200).json({
            data:flight,
            success:true,
            message:'succesfullycreated a flight',
            err:{}
        });
    } catch (error) {
 console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to created a flight',
            err:error
        });
    }
    
}
const getAll = async(req,res)=>{
    try {
        const flights = await flightService.getAllFlightsData(req.query);
         return res.status(200).json({
            data:flights,
            success:true,
            message:'succesfully fetched flights',
            err:{}
        });
    } catch (error) {
         console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get all flights',
            err:error
        });
    }
}

module.exports={
    create,
    getAll
}