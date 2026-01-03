class CrudRepository{
    constructor(model){
        this.model = model;
    }
     async createModel(data){  // name is object thats under City Model
            try{
                const result = await this.model.create(data);
                return result;
            }catch(error){
                console.log("Something wrong in crud repository layer");
                    throw {error};
            }
        }
        async deleteModel(modelId){
            try {
                await this.model.destroy({
                    where:{
                        id:modelId
                    }
                });
            } catch (error) {
                 console.log("Something wrong in crud repository layer");
                throw {error};
            }
        }
        async updateModel(modelId,data){
            try { 
                const result = await this.model.update(data,{
                    where:{
                        id:modelId
                    }
                });

                return result;
            } catch (error) {
                 console.log("Something wrong in crud repository layer");
            
                throw {error};
            }
        }
        async getModel(modelId){
            try{
                const result = this.model.findByPk(modelId);
                return result;
            }catch(error){
                 console.log("Something wrong in crud repository layer");
            
                    throw {error};
            }
        }
        async getAllModels(){
            try{
            const result = this.model.findAll();
            return result;    
            }catch(error){
                 console.log("Something wrong in crud repository layer");
            
                    throw {error};
            }
        }
}
module.exports = CrudRepository;