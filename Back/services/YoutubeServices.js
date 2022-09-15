const Youtube = require('../models/Youtube');
const YoutubeApi = require('../api/youtubeApi');
const UpdateDate = require('./UpdateDate');

const getChannelDetails = async() =>{
    try {
        const youtubes = await Youtube.find();
        for (youtube of youtubes){
            const channelInfo = await YoutubeApi.getChannelDetails(youtube.url_code);
            youtube._doc = {
                ...youtube._doc,
                ...channelInfo
            }
            await Youtube.findByIdAndUpdate(youtube._id, youtube);
        }
        await UpdateDate.UpdateDate();
        return youtubes

    } catch (error) {
        console.error(error)
        throw {
            status: error?.code || 500,
            message: error?.message || "No se ha podido localizar los datos del canal en Youtube"
        }
    }
}

module.exports = {
    getChannelDetails
}