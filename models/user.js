var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User schema
var UserSchema = new Schema({
    name: { type: String, required: true } ,
    email: { type: String, required: true } ,
    username: { type: String, required: true } ,
    google: {}
    
 });
    
module.exports = mongoose.model('User', UserSchema);