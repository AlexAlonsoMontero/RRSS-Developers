const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const developerSchema = Schema({
    name: {
        type: String,
        unique: true,
        index: true
    },
    update: {
        type: Date,
        default: Date.now
    },
    gitHub:{
        type: Schema.Types.ObjectId,
        ref: 'GitHub'
    },twitter:{
        type: Schema.Types.ObjectId,
        ref: 'Twitter'
    },youtube:{
        type: Schema.Types.ObjectId,
        ref: 'Youtube'
    }
})




module.exports = model('Developer', developerSchema);