const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    created: {type: String, required: true},
    group: {type: String, ref: 'Group'}
})

module.exports = mongoose.model('User',  userSchema);