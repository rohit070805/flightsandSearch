const {AirplaneService} = require('../services/index');
const airplaneService= new AirplaneService();


const create = async(req,res)=>{
    try {
        console.log(req.body);
        const airport = await airplaneService.createService(req.body);
        return res.status(201).json({
            data:airport,
            success:true, 
            message:'Succesfulyy created a airplane',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to created a airplane',
            err:error
        });
    }
}


const destroy= async (req,res)=>{
     try {
        const response = await airplaneService.deleteSerive(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Succesfulyy deleted a airplane',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to delete a airplane',
            err:error
        });
    }
}

const get = async(req,res)=>{
    try {
        const airport = await airplaneService.getService(req.params.id);
        return res.status(200).json({
            data:airport,
            success:true,
            message:'Succesfulyy get a airplane',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get a airplane',
            err:error
        });
    }
}

const getAll = async(req,res)=>{
    try {
        // console.log(req.query.name);
        // console.log(req.params);
        // console.log("Hello");
        const airports = await airplaneService.getAllService();
        return res.status(200).json({
            data:airports,
            success:true,
            message:'Succesfulyy get airplane',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get airplane',
            err:error
        });
    }
}

const update = async(req,res)=>{
      try {
        const airport = await airplaneService.updateService(req.params.id,req.body);
        return res.status(200).json({
            data:airport,
            success:true,
            message:'Succesfulyy updated a airplane',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update a airplane',
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