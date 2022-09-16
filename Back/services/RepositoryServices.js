const { NotFoundInBDError } = require('../errors/DBError')
const Repository = require('../models/Repository');
const Github = require('../models/GitHub');
const gitApi = require('../api/gitApi');
const UpdateDate = require('./UpdateDate')

//CONSUMO BASE DE DATOS INTERNA
const getAllRepositories = async () => {
    try {
        const repos = await Repository.find().populate("gitHub", "gitUser")
        if (repos.length === 0) throw new NotFoundInBDError('repositories')
        return repos

    } catch (error) {
        console.error(error)
        throw {
            status: error?.code || 500,
            message: error?.message || "No se ha podido localizar los repositorios por lenguaje"
        }
    }
}

const getRepoByParam = async(params = {})=>{
    try {
        // const repos = await Repository.find().populate({
        //     path: "gitHub",
        //     match: { "gitHub.gitUser": "carlosazaustre" }
        // })
        const repos = await Repository.find(params).populate('gitHub', 'gitUser')
        if (repos.length === 0) throw new NotFoundInBDError('repositories')
        return repos

    } catch (error) {
        console.error(error)
        throw {
            status: error?.code || 500,
            message: error?.message || "No se ha podido localizar los repositorios"
        }
    }
}

//OPERACIONES CON API EXTERNA
const updateReposInfo = async () => {
    try {
        const gitHubs = await Github.find();
        let remoteRepo = []
        for (git of gitHubs){
            remoteRepos = await gitApi.getGitReposByUser(git.gitUser);
            remoteRepos.map(repo  => {
                repo.gitHub = git._id
                return repo
            })
            await Repository.deleteMany({})
            await Repository.insertMany(remoteRepos)
            remoteRepo.push(remoteRepos);
        }
        await UpdateDate.UpdateDate();
        return remoteRepos
    } catch (error) {
        throw {
            status: error?.code || 500,
            message: error?.message || "No se ha podido actualizar bd detalles de usuario de Github"
        }
    }
}

module.exports = {
    getAllRepositories,
    getRepoByParam,
    updateReposInfo
}