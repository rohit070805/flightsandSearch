const {CityService} = require('../services/index');
const cityService= new CityService();

// POST -> /city
const create = async(req,res)=>{
    try {
        const city = await cityService.createService(req.body);
        return res.status(201).json({
            data:city,
            success:true, 
            message:'Succesfulyy created a city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to created a city',
            err:error
        });
    }
}

// DELETE -> /city/:id
const destroy= async (req,res)=>{
     try {
        const response = await cityService.deleteService(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Succesfulyy deleted a city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to delete a city',
            err:error
        });
    }
}
// GET -> /city/:id
const get = async(req,res)=>{
    try {
        const city = await cityService.getService(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:'Succesfulyy get a city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get a city',
            err:error
        });
    }
}

const getAll = async(req,res)=>{
    try {
        // console.log(req.query.name);
        // console.log(req.params);
        // console.log("Hello");
        const cities = await cityService.getAllService(req.query);
        return res.status(200).json({
            data:cities,
            success:true,
            message:'Succesfulyy get cities',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get Cities',
            err:error
        });
    }
}
// Patch -> /city/:id
const update = async(req,res)=>{
      try {
        const city = await cityService.updateService(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:'Succesfulyy updated a city',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update a city',
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