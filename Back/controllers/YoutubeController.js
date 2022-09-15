const YoutubeService = require('../services/YoutubeServices');

//UPDATE  BASE DE DATOS PARA LA INFO DE YOUTUBE
const updateYoutubeInfo = async(request, response) =>{
    try {
        const channelDetails = await YoutubeService.getChannelDetails();
        response
            .status(200)
            .send({
                status: "OK",
                data: {channelDetails: channelDetails}
            })
    } catch (error) {
        console.error(error);
        response
            .status( error?.status || 500)
            .send( error?.message || "No seha podido actualizar datos de Youtube con API externa")
    }
}

module.exports = {
    updateYoutubeInfo
}