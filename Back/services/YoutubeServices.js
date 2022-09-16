const Youtube = require('../models/Youtube');
const YoutubeApi = require('../api/youtubeApi');
const UpdateDate = require('./UpdateDate');
const Lists = require('../models/Lists');
const Videos = require('../models/Video');

const updateChannelDetails = async () => {
    try {
        const youtubes = await Youtube.find();
        for (youtube of youtubes) {
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
            message: error?.message || "No se ha podido localizar los datos de los canales de Youtube"
        }
    }
}

const updateListDetails = async () => {
    try {
        const youtubes = await Youtube.find();
        let remoteList = [];
        for (youtube of youtubes) {
            remoteLists = await YoutubeApi.getListDetails(youtube.channelId);

            remoteLists = remoteLists.map(list => {
                list.youtube = youtube._id;
                return list;
            })
            await Lists.deleteMany({});
            await Lists.insertMany(remoteLists);
            remoteList.push(remoteLists)
        }
        await UpdateDate.UpdateDate();
        return remoteList
    } catch (error) {
        // console.error(error)
        throw {
            status: error.request?.status || 500,
            message: error?.message || "No se ha podido localizar los datos las listas en Youtube",
            data: error.request
        }
    }
}

const updateVideoDetails = async () => {
    try {
        const youtubes = await Youtube.find();
        console.log(youtubes)
        let remoteVideo = [];
        for (youtube of youtubes) {
            if(! youtube.channelId ) throw Error("No existe channel Id")
            remoteVideos = await YoutubeApi.getVideoDetails(youtube.channelId);
            remoteVideos = remoteVideos.map(list => {
                list.youtube = youtube._id;
                return list;
            })
            await Videos.deleteMany({});
            await Videos.insertMany(remoteVideos);
            remoteVideo.push(remoteVideos)
        }
        await UpdateDate.UpdateDate();
        return remoteVideo
    } catch (error) {
        console.error(error)
        throw {
            status: error?.code || 500,
            message: error?.message || "No se ha podido localizar los datos las listas en Youtube"
        }
    }
}


module.exports = {
    updateChannelDetails,
    updateListDetails,
    updateVideoDetails
}