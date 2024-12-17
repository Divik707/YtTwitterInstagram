const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const PostSchema = new Schema({
    name: { type: ObjectId, required: true, ref: 'User' },
    image: { type: String, required: true },
    description: { type: String, required: true },
});

const Posts = mongoose.models.Posts || mongoose.model('Posts', PostSchema);

module.exports = { Posts };
