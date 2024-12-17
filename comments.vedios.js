const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const VedioCommentSchema = new Schema({
    name: { type: ObjectId, required: true, ref: 'User' },
    vedio: { type: ObjectId, required: true, ref: 'Vedio' },
    Comment: { type: String, required: true },
});

const CommentVedios = mongoose.models.CommentVedios || mongoose.model('CommentVedios', VedioCommentSchema);

module.exports = { CommentVedios };
