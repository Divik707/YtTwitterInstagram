const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const PostsCommentsSchema = new Schema({
    name: { type: ObjectId, required: true, ref: 'User' },
    post: { type: ObjectId, required: true, ref: 'Post' },
    Comment: { type: String, required: true },
});

const CommentPosts = mongoose.models.CommentPosts || mongoose.model('CommentPosts', PostsCommentsSchema);

module.exports = { CommentPosts };
