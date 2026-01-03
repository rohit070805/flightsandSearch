const validateCreateFlight= (req,res,next)=>{
    if(
        !req.body||
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        return res.status(400).json({
            data :{},
            success:false,
            message:"Invalid body request parameters",
            err:"Missing mandatory properties in body"
        });
    }
    next();
}
module.exports = {
    validateCreateFlight
}