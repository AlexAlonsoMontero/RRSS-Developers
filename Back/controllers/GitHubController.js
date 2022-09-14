const GitHubServices = require('../services/GitHubServices');

const updateGitInfo = async(request,response)=>{
    try {
        const updateDetails = await GitHubServices.updateUserDetails();
        const updateRepos = await GitHubServices.updateUserRepos();
        response.send({
            status: "OK",
            data:{
                info: "Actualizados destalles de usuario Github",
                gitInfo: updateRepos
            }
        })
    } catch (error) {
        response
            .status( error?.status || 500)
            .send( error?.message || "No seha podido actualizar datos de Git con API externa")
    }
}


module.exports = {
    updateGitInfo
}