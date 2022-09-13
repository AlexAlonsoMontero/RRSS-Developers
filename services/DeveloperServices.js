const {NotFoundInBDError} = require('../errors/DBError');
const Developer = require('../models/Developer');

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
    getDevelopers
}