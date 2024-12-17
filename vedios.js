const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const VedioSchema = new Schema({
    name: { type: ObjectId, required: true, ref: 'User' },
    Title: { type: String, required: true }, 
    description: { type: String, required: true },
    thumbnail: { type: String, required: true }, 
});

const Vedios = mongoose.models.Vedios || mongoose.model('Vedios', VedioSchema);

module.exports = { Vedios };

