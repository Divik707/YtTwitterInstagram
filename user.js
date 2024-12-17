const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    creatorYet: { type: Boolean, default: false },
    age: { type: Number, required: true },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = { User };
