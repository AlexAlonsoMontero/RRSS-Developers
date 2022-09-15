const RespositoryServices = require('../services/RepositoryServices');
const LanguageSelector  = require('../helpers/LanguageSelector');

const getAllRepos = async (request, response) => {
    try {
        const repos = await RespositoryServices.getAllRepositories();
        response
            .status(200)
            .send({
                status: "OK",
                data: repos
            })
    } catch (error) {

        console.error(error);
        response
            .status(error?.status || 500)
            .send(error?.message || "No se ha podido realizar la busqueda de repositorios por repository")

    }
}

const getReposByDeveloper = async (request, response) => {
    try {
        const gitHubId = {gitHub: request.params.gitHubId}
        const repos = await RespositoryServices.getRepoByParam(gitHubId)
        response
            .status(200)
            .send({
                status: "OK",
                data: repos
            })
    } catch (error) {
        console.error(error);
        response
            .status(error?.status || 500)
            .send(error?.message || "No se ha podido realizar la busqueda de repositorios por repository")
    }
}

const getReposByLanguage = async (request, response) => {
    try {
        language = LanguageSelector(request.params.language)
        const repos = await RespositoryServices.getRepoByParam({language:language});
        response
            .status(200)
            .send({
                status: "OK",
                data: repos
            })
    } catch (error) {
        console.error(error);
        response
            .status(error?.status || 500)
            .send(error?.message || "No se ha podido realizar la busqueda de repositorios por repository")
    }
}

const searchRepos = async (request, response)=>{
    try {
        console.log()
        if(request.query.language){
            request.query.language = LanguageSelector(request.query.language);
        }
        const repos = await RespositoryServices.getRepoByParam(request.query);
        response
            .status(200)
            .send({
                status: "OK",
                data: repos
            })
    } catch (error) {
        console.error(error);
        response
            .status(error?.status || 500)
            .send(error?.message || "No se ha podido realizar la busqueda de repositorios por repository")
    }
    
}


module.exports = {
    getReposByDeveloper,
    getAllRepos,
    getReposByLanguage,
    searchRepos
}