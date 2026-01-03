
class CrudService{
    constructor(repository){
        this.repository = repository;
    }
    async createService(data){
        try {
            const result = await this.repository.createModel(data);
            return result;
        } catch (error) {
            console.log("something wrong in crud service layer");
            throw {error};
        }
    }
    async deleteSerive(modelId){
        try {
            const response= await this.repository.deleteModel(modelId);
            return response;
        } catch (error) {
            console.log("something wrong in crud service layer");
            throw {error};
        }
    }
    async updateService(modelId,data){
        try {
            const result = await this.repository.updateModel(modelId,data);
            return result;
        } catch (error) {
            console.log("something wrong in crud service layer");
            throw {error};
        }
    }
    async getService(modelId){
        try {
            const result = await this.repository.getModel(modelId);
            return result;
        } catch (error) {
            console.log("something wrong in crud service layer");
            throw {error};
        }
    }
    async getAllService(){
        try {
            const result = await this.repository.getAllModels();
            return result;
        } catch (error) {
            console.log("something wrong in crud service layer");
            throw {error};
        }
    }
}
module.exports = CrudService; 