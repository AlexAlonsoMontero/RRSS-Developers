const {Schema, model, models} = require('mongoose');

const ListSchema = Schema({
    list_id: String,
    title: String,
    description: String,
    thumbnails: String,
    youtube: {
        type: Schema.Types.ObjectId,
        ref: 'Youtube'
    }
})

ListSchema.index({title: 'text', description: 'text'});


module.exports = model('List',ListSchema);