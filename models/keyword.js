var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose schema for keywords
var KeywordSchema = new Schema({

    alias: { type: String, required: true } ,
    url: { type: String, required: true } ,
    descrip: { type: String, required: false } ,
    uses: { type: Number, default: 0, required: true } ,
    user: { type : Schema.ObjectId, ref: 'User', required: true } ,
    date: { type: Date, default: Date.now, required: true },
    priv: { type: Boolean, default: false}
    
});

KeywordSchema.methods = {

    create: function (user, tokens, cb) {

        // reference to keyword instance calling this function
        var self = this;

        // Alias must always be second token
        var alias = tokens[1];
        // Url must always be third token
        var url = tokens[2];

        self.alias = alias;
        self.url = url;
        self.user = user._id;

        // Check for optional parameters; Description and Privacy parameter
        // If there is more than the minimum amount of tokens, check for private parameter
        if(tokens.length > 3) {

            // Four tokens have been entered
            if(tokens.length === 4) {

                // If last token is '-p' make keyword private. -p must be last
                if(tokens[3] === '-p') {
                    self.priv = true;
                } // last token is not privacy parameter, must be description
                else {
                    var descrip = tokens[3];
                    self.descrip = descrip;
                }
            } // Five tokens have been entered, the max for a create command (operator, alias, url, descrip, privacy param)
            else if(tokens.length === 5) {

                if(tokens[4] === '-p')
                    self.priv = true;

                var descrip = tokens[3];
                self.descrip = descrip;
            }
        }

        self.save(cb);
    }
}

KeywordSchema.statics = {

	// get keyword by alias
	retrieve: function (qalias, ruser, cb) {

        // optional user parameter not passed in
        if(typeof ruser === "undefined") {
    		this.findOneAndUpdate({ alias : qalias, priv : false}, {$inc: {"uses": 1}})
    			.exec(cb);
        }
        else {
            this.findOneAndUpdate({$or : [{alias : qalias, priv : false}, {alias : qalias, priv:true, user: ruser._id}]}, {$inc: {"uses": 1}})
                .exec(cb);
        }
	}
}
    
module.exports = mongoose.model('Keyword', KeywordSchema);