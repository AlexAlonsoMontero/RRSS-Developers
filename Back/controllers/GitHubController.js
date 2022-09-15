const GitHubServices = require('../services/GitHubServices');

//UPDATE DE TODOS LOS DEVELOPERS DE LA BASE DE DATOS PARA LA INFO DE GITHUB
const updateGitInfo = async(request,response)=>{
    try {
        const updateDetails = await GitHubServices.updateUserDetails();
        const updateRepos = await GitHubServices.updateReposInfo();
        response.send({
            status: "OK",
            data:{
                info: "Actualizados destalles de usuario Github",
                gitUsers: updateDetails,
                gitRepos: updateRepos
            }
        })
    } catch (error) {
        console.error(error);
        response
            .status( error?.status || 500)
            .send( error?.message || "No seha podido actualizar datos de Git con API externa")
    }
}


module.exports = {
    updateGitInfo,
}