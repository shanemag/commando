var mongoose = require('mongoose');
var Keyword = mongoose.model('Keyword');

module.exports = function(req,res) {
	
	// Get input text from parser
	var str = req.query.command;
	var tokens = str.split(" ");
	// test tokens
	for (var i = 0; i < tokens.length; i++) {
		console.log(tokens[i]);
	};

	var keytoken = tokens[0];

	// First token is create operator, so 
	if(keytoken === '+') {

		var alias = tokens[1];
		var url = tokens[2];

		var newKeyword = new Keyword();
		newKeyword.alias = alias;
		newKeyword.url = url;
		newKeyword.user = req.user;

		newKeyword.save(function (err) {
  			if (err) return handleError(err);
  			// saved!
  			console.log("saved!");
  			res.send("Created new keyword: " + newKeyword.alias + " with URL " + newKeyword.url)
		});
	} else if (keytoken === '-') {
		// Delete keyword. will need permissions. Throw up a flash "are you sure?" window perhaps?
	} else {
		Keyword.retrieve(keytoken, function(err, command) {
			if(err) return handleError(err);
			res.redirect(command.url);
		});
	}

	

	
	
}