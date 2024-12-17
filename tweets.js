const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const TweetsSchema = new Schema({
    name: { type: ObjectId, required: true, ref: 'User' },
    Title: { type: String, required: true },
    description: { type: String, required: true },
});

const Tweets = mongoose.models.Tweets || mongoose.model('Tweets', TweetsSchema);

module.exports = { Tweets };
