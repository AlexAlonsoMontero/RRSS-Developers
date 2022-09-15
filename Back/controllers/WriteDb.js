
const mongoose = require('mongoose');
const Developer = require('../models/Developer');
const GitHub = require('../models/GitHub');
const Youtube  = require('../models/Youtube');
const dataFile =  require('../db/json/developers.json');


const writeDb =async(request,response)=>{
    try {
        
        for ( data of dataFile){
            const {developerJSON, gitHubJSON, youtubeJSON}= data;
            const developer = new Developer ({
                ...developerJSON
            });
            await developer.save();

            const gitHub = new GitHub({
                ...gitHubJSON,
                developer: developer._id
            });
            await gitHub.save();

            developer.gitHub = gitHub._id
            await  developer.save();

            const youtube = new Youtube({
                ...youtubeJSON,
                developer: developer._id
            })
            await youtube.save();
        }
        response
            .status(200)
            .send({
                status: "OK",
                info: "Colecciones creadas correctamente"
            })

    } catch (error) {
        response.send({
            status: "FAILED",
            data:{
                status: 500,
                info: error?.message || "No se ha podido crear coleccioens en BD",

            }
        })
    }
}

module.exports = {
    writeDb
}