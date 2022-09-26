const YoutubeService = require('../services/YoutubeServices');

//UPDATE  BASE DE DATOS PARA LA INFO DE YOUTUBE

const getListAndVideos = async(request, response) =>{
    try {
        const listVideos = await YoutubeService.getAllListAndVideos()
        response
            .status(200)
            .send({
                status: "OK",
                info: "Todos los videeos y listas almacenados",
                data:{
                    listVideos
                }
            })
    } catch (error) {
        response
            .status(error?.status || 500)
            .send({
                status:"FAILED",
                message: error?.message || "No seha podido localizar datos de videos y listas en Base de datos",
            })
    }

}

const getListAndVideosByDeveloper = async (request, response) =>{
    try {
        const videosAndList = await YoutubeService.getListAndVideosById( request.params.developerId );
        response
            .status(200)
            .send({
                status: "OK",
                info: "Listas y vídeos por id de developer",
                data: {
                    videosAndList
                }
            })
    } catch (error) {
        response
            .status(error?.status || 500)
            .send({
                status:"FAILED",
                message: error?.message || "No seha podido localizar datos de videos y listas en Base de datos",
            })
    }
}

const searchText = async( request, response ) => {
    try {
        const data = await YoutubeService.searchText( request.query );
        response
            .status(200)
            .send({
                info: "Búsqueda de vídeos por texto",
                status: "OK",
                data
            })
    } catch (error) {
        response
            .status(error?.status || 500)
            .send({
                status:"FAILED",
                message: error?.message || "No seha podido localizar datos de videos y listas en Base de datos",
            })
    }
}


//UPDATE BASE DE DATOS CON API EXTERNA
const updateYoutubeInfo = async (request, response) => {
    try {
        const channelDetails = await YoutubeService.updateChannelDetails();
        const lists = await YoutubeService.updateListDetails();
        const videos = await YoutubeService.updateVideoDetails();
        response
            .status(200)
            .send({
                status: "OK",
                info: "Actualizados datos de youtube: Canales , listas y vídeos",
                data: {
                
                    channelDetails: channelDetails,
                    lists: lists,
                    videos: videos
                }
            })
    } catch (error) {
        response
            .status(error?.status || 500)
            .send({
                status:"FAILED",
                message: error?.message || "No seha podido actualizar datos de Youtube con API externa",
            })
    }
}

module.exports = {
    updateYoutubeInfo,
    getListAndVideos,
    getListAndVideosByDeveloper,
    searchText
}