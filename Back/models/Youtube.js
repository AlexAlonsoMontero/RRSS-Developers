const { Schema, model  }  = require('mongoose');

const YoutubeSchema = Schema({
    url_code: String,
    channelId: {
        type: String,
        unique: true
    },
    title: String,
    description: String,
    thumbnails: String,
    developer: {
        type: Schema.Types.ObjectId,
        ref: 'Developer'
    }
})


module.exports = model('Youtube', YoutubeSchema)