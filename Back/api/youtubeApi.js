const axios = require('axios');
const searchUrl = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=channel&q=';

const getChannelDetails = async (url_code) => {
    try {
        const { data } = await axios.get(`${searchUrl}${url_code}&key=${process.env.YOUTUBE_TOKEN}`);
        if(data.pageInfo.totalResults == 0) throw Error ("No se han localizado datos en la consulta a Youtube");
        return {
            url_code: url_code,
            channelId: data.items[0].snippet.channelId,
            title: data.items[0].snippet.title,
            description: data.items[0].snippet.description,
            thumbnails: data.items[0].snippet.thumbnails.medium.url
        }

    } catch (error) {
        console.error(error);
        throw {
            status: error?.code || 500,
            message: error?.message || "No se han podido descargar datos de la api de Youtube"
        }
    }
}

module.exports = {
    getChannelDetails
}