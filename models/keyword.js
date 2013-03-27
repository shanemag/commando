var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KeywordSchema = new Schema({
    alias: { type: String, required: true } ,
    url: { type: String, required: true } ,
    descrip: { type: String, required: false } ,
    uses: { type: String, required: false } 
    
    });
    
module.exports = mongoose.model('Keyword', KeywordSchema);