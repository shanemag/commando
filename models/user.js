var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User schema
var UserSchema = new Schema({
    name: { type: String, required: true } ,
    email: { type: String, required: true } ,
    username: { type: String, required: true } ,
    google: {}
    
 });

// Scheme for user groups. contains users and keywords they can use
var GroupSchema = new Schema({
	name: { type: String, required: true},
	users: {type: [UserSchema], required: true}
	//keywords: {type: , required: false}
})

exports.User = mongoose.model('User', UserSchema);
exports.Group = mongoose.model('Group', GroupSchema);