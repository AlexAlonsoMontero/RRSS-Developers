const { Schema, model  }  = require('mongoose');

const YoutubeSchema = Schema({
    url_code: String,
    channelId: String,
    title: String,
    description: String,
    thumbnails: String,
    developer: {
        type: Schema.Types.ObjectId,
        ref: 'Developer'
    }
})

YoutubeSchema.index({ title: 'text', description: 'text'});


module.exports = model('Youtube', YoutubeSchema)