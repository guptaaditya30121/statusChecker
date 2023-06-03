const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String
})

//convention to use with uppercase first letter
const User = mongoose.model('user',userSchema);

module.exports = User;