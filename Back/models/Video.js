const { Schema, model } = require('mongoose');

const VideoSchema = Schema({
    video_id: String,
    title: String,
    description: String,
    thumbnails: String,
    youtube: {
        type: Schema.Types.ObjectId,
        ref: 'Youtube'
    }
})

module.exports = model('Video',  VideoSchema)