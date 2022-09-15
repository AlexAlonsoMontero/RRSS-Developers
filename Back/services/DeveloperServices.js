const {NotFoundInBDError} = require('../errors/DBError');
const Developer = require('../models/Developer');
const GitHub = require('../models/GitHub');
const Repository = require('../models/Repository');

const getDevelopersBasicInfo = async()=>{
    try {
        const developers = await Developer.find().populate(
            'gitHub','gitUser avatar_url public_repos')
        return developers
    } catch (error) {
        console.error(error);
        throw{
            status: error?.code || 500,
            message: error?.message || "No ha realizado la busqueda de información básica de developers",
        }
    }
}


const getDevelopers =async()=>{
    try {
        const developers = await Developer.find().populate('gitHub');

        if(developers.length ===0) throw new NotFoundInBDError('developers')
        return developers
    } catch (error) {
        console.error(error);
        throw{
            status: error?.code || 500,
            message: error?.message || "No se ha podido crear coleccioens en BD",
        }
    }

}

module.exports = {
    getDevelopers,
    getDevelopersBasicInfo
}