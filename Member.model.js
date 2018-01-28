mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
    _id: Number,
    name: String,
    age: Number
});

module.exports = mongoose.model('Member' , MemberSchema);
