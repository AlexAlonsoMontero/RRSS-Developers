const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const developerSchema = Schema({
    name: {
        type: String,
        unique: true
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
    }
})




module.exports = model('Developer', developerSchema);