const { NotFoundInBDError } = require('../errors/DBError')
const Repository = require('../models/Repository');

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
        console.log(params)
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



module.exports = {
    getAllRepositories,
    getRepoByParam
}