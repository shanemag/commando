var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KeywordSchema = new Schema({

    alias: { type: String, required: true } ,
    url: { type: String, required: true } ,
    descrip: { type: String, required: false } ,
    uses: { type: String, required: false } ,
    user: { type : Schema.ObjectId, ref: 'User', required: false } ,
    date: { type: Date, default: Date.now, required: true }
    
});
    
module.exports = mongoose.model('Keyword', KeywordSchema);