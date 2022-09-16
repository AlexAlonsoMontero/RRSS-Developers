const YoutubeService = require('../services/YoutubeServices');

//UPDATE  BASE DE DATOS PARA LA INFO DE YOUTUBE
const updateYoutubeInfo = async (request, response) => {
    try {
        const channelDetails = await YoutubeService.updateChannelDetails();
        const lists = await YoutubeService.updateListDetails();
        const videos = await YoutubeService.updateVideoDetails();
        response
            .status(200)
            .send({
                status: "OK",
                data: {
                    channelDetails: channelDetails,
                    lists: lists,
                    videos: videos
                }
            })
    } catch (error) {
        console.error(error);
        response
            .status(error?.status || 500)
            .send({
                message: error?.message || "No seha podido actualizar datos de Youtube con API externa",
                data: error?.data
            })
    }
}

module.exports = {
    updateYoutubeInfo
}