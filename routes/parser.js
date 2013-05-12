var mongoose = require('mongoose');
var Keyword = mongoose.model('Keyword');

module.exports = function (req, res) {

	var str = req.query.command; // Actual textbox input
	var tokens = str.split(" "); // Array of tokens from input
	var keytoken = tokens[0]; // First token, used to determine next action
	var tail = tokens.slice(1); // Parameters following first token

	// First token is create operator, so call CREATE COMMAND
	if (keytoken === '+') {
		
		// Create new keyword instance. populate with query data
		var newKeyword = new Keyword();
		newKeyword.create (req.user, tokens, function (err) {
			if (err) return res.render('500');
			console.log("saved!");
  			res.send("Created new keyword: " + newKeyword.alias + " with URL " + newKeyword.url);
		});

	// END CREATE COMMAND
	} else if (keytoken === '-') {
		// Delete keyword. will need permissions. Throw up a flash "are you sure?" window perhaps?
	} else {
		if (req.isAuthenticated) {
			Keyword.retrieve (keytoken, req.user, function (err, command) {
				if (err) return res.render('500');
				else if(tokens.length === 1) {
					shavedURL = shaveSearchURL(command.url);
					res.redirect(shavedURL); 
				} else {
					var appendedURL = insertParamsToURL(tail, command.url);
					res.redirect(appendedURL);
				}
			});
		} else {
			Keyword.retrieve(keytoken, function(err, command) {
				if (err) return res.render('500');
				else if(tokens.length === 1) {
					shavedURL = shaveSearchURL(command.url);
					res.redirect(shavedURL); 
				} else {
					var appendedURL = insertParamsToURL(tail, command.url);
					res.redirect(appendedURL);
				}
			});
		}
	}	
}

var insertParamsToURL = function (params, url) {
	var joinedparams = params.join('+');
	var result = url.replace(/%s/g, joinedparams);
	return result;
}

var shaveSearchURL = function (url) {
	var result = url.replace(/%s/g, '');
	return result;
}