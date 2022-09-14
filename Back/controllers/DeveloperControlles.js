const DeveloperServices = require('../services/DeveloperServices');

const getDevelopers = async(request,response)=>{
    try {
        const developers = await DeveloperServices.getDevelopers();
        response
            .status(200)
            .send({
                data:{
                    info: "Developers guardados",
                    data: developers
                } 
            })
    } catch (error) {
        response
            .status(error?.code  || 500)
            .send({
                status: "FAILED",
                data:{
                    status: error?.code || error?.status || 500,
                    info: error.message
                }
            })
    }


}

module.exports ={
    getDevelopers
}