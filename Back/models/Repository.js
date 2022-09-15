const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const RespositorySchema = Schema({

    name: String,
    html_url: String,
    description: String,
    language: String,
    gitHub: {
        type: Schema.Types.ObjectId,
        ref: 'GitHub'
    }


})

module.exports = model('Repository', RespositorySchema);
