const {FlightService} = require('../services/index');
const flightService = new FlightService();
const create = async(req,res)=>{
    try {
        const flight = await flightService.createService(req.body);
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
        const flights = await flightService.getAllService(req.query);
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
const destroy= async (req,res)=>{
     try {
        const response = await flightService.deleteService(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Succesfulyy deleted a flight',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to delete a flight',
            err:error
        });
    }
}
const get = async(req,res)=>{
    try {
        const city = await flightService.getService(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:'Succesfulyy get a flight',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get a flight',
            err:error
        });
    }
}
const update = async(req,res)=>{
      try {
        const city = await flightService.updateService(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:'Succesfulyy updated a flight',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update a flight',
            err:error
        });
    }
}

module.exports={
    create,
    getAll,
    get,
    update,
    destroy
}