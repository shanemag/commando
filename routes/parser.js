var mongoose = require('mongoose');
var Keyword = mongoose.model('Keyword');
//var config = require('../config/config');
var googleurl = "http://www.google.com/search?q=";


module.exports = function (req, res) {

	var str = req.query.command; // Actual textbox input
	var tokens = str.split(" "); // Array of tokens from input
	var keytoken = tokens[0]; // First token, used to determine next action
	var tail = tokens.slice(1); // Parameters following first token

	if(!str || str === null) { // If request string is empty just redirect back
		res.redirect('back');
	}
	else if (keytoken === '+') { // First token is create operator, so call CREATE COMMAND
		
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

				if (err) res.render('500');
				if(!command) {
					//resource = Keyword.returnDefault();
					//console.log("no command found");
					var defaultGoogle = insertParamsToURL(tokens, googleurl);
					res.redirect(defaultGoogle)
					
				} 			
				else if(tokens.length === 1) {
					//shavedURL = shaveSearchURL(command.url);
					res.redirect(command.url); 
				} else {
					var appendedURL = insertParamsToURL(tail, command.url);
					res.redirect(appendedURL);
				}
			});
		} else {
			Keyword.retrieve(keytoken, function(err, command) {

				var resource = command;

				if (err) res.render('500');	
				if(!command) {
					//resource = Keyword.returnDefault();
					var defaultGoogle = insertParamsToURL(tokens, googleurl);
					res.redirect(defaultGoogle)
				} 	
				else if(tokens.length === 1) {
					//shavedURL = shaveSearchURL(command.url);
					res.redirect(command.url); 
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
	url = String(url);
	var result = url.concat(joinedparams);
	return result;
}

/*var shaveSearchURL = function (url) {
	var result = url.replace(/%s/g, '');
	return result;
} */