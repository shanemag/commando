var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose schema for keywords
var KeywordSchema = new Schema({

    alias: { type: String, required: true } ,
    url: { type: String, required: true } ,
    descrip: { type: String, required: false } ,
    uses: { type: Number, default: 0, required: true } ,
    user: { type : Schema.ObjectId, ref: 'User', required: false } ,
    date: { type: Date, default: Date.now, required: true },
    private: { type: Boolean, default: true}
    
});

KeywordSchema.statics = {


	// get keyword by alias
	retrieve: function (qalias, cb) {
		this.findOneAndUpdate({ alias : qalias }, {uses++})
			.exec(cb);

	}
}
    
module.exports = mongoose.model('Keyword', KeywordSchema);