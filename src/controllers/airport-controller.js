
const {AirportService} = require('../services/index');
const airportService= new AirportService();

// POST -> /airport
const create = async(req,res)=>{
    try {
        console.log(req.body);
        const airport = await airportService.createService(req.body);
        return res.status(201).json({
            data:airport,
            success:true, 
            message:'Succesfulyy created a airport',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to created a airport',
            err:error
        });
    }
}

// DELETE -> /airport/:id
const destroy= async (req,res)=>{
     try {
        const response = await airportService.deleteService(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Succesfulyy deleted a airport',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to delete a airport',
            err:error
        });
    }
}
// GET -> /airport/:id
const get = async(req,res)=>{
    try {
        const airport = await airportService.getService(req.params.id);
        return res.status(200).json({
            data:airport,
            success:true,
            message:'Succesfulyy get a airport',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get a airport',
            err:error
        });
    }
}

const getAll = async(req,res)=>{
    try {
        // console.log(req.query.name);
        // console.log(req.params);
        // console.log("Hello");
        const airports = await airportService.getAllService();
        return res.status(200).json({
            data:airports,
            success:true,
            message:'Succesfulyy get airports',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get airports',
            err:error
        });
    }
}
// Patch -> /city/:id
const update = async(req,res)=>{
      try {
        const airport = await airportService.updateService(req.params.id,req.body);
        return res.status(200).json({
            data:airport,
            success:true,
            message:'Succesfulyy updated a airport',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update a airport',
            err:error
        });
    }
}

module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}