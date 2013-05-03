var mongoose = require('mongoose');
var Keyword = mongoose.model('Keyword');

module.exports = function(req,res) {
	
	// Get input text from parser
	var str = req.query.command;
	var tokens = str.split(" ");

	// Query first token to determine action
	var keytoken = tokens[0];

	// First token is create operator, so call CREATE COMMAND
	if(keytoken === '+') {

		// Alias must always be second token
		//var alias = tokens[1];
		// Url must always be third token
		//var url = tokens[2];

		// Create new keyword instance. populate with query data
		var newKeyword = new Keyword({user: req.user});
		newKeyword.create(tokens, function(err) {
			if (err) return handleError(err);
			console.log("saved!");
  			res.send("Created new keyword: " + newKeyword.alias + " with URL " + newKeyword.url);
		});
	// END CREATE COMMAND
	} else if (keytoken === '-') {
		// Delete keyword. will need permissions. Throw up a flash "are you sure?" window perhaps?
	} // Not an operator, may be a keyword
	else {
		Keyword.retrieve(keytoken, function(err, command) {
			if(err) return handleError(err);
			res.redirect(command.url);
		});
	}

	

	
	
}