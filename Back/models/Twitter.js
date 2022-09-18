const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const TwitterSchema = Schema({
    username: {
        type: String,
        unique: true
    },
    description: String,
    followers: Number,
    tweets: [{
        text:String
    }],
    developer: {
        type: Schema.Types.ObjectId,
        ref: 'Developer'
    }

})

module.exports =model ('Twitter', TwitterSchema);