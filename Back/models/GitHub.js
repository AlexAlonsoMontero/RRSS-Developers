const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const gitHubSchema = Schema({
    gitUser: String,
    avatar_url: String,
    html_url: String,
    bio: String,
    public_repos: Number,
    followers: Number,
    developer: {
        type: Schema.Types.ObjectId,
        ref: 'Developer'
    }

})

module.exports = model('GitHub',gitHubSchema);
