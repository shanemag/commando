var mongoose = require('mongoose');
var Keyword = mongoose.model('Keyword');
var uservar;

module.exports = {


	getKeyword: function(key) {

	},

	var createKeyword = function(params) {
		var alias = params[1];
		var url = params[2];

		var newKeyword = new Keyword();
		newKeyword.alias = alias;
		newKeyword.url = url;

		newKeyword.save(function (err) {
  			if (err) return handleError(err);
  			// saved!
		});
	},

	parseCommand = function(req,res) {

		var str = req.query.command;
		uservar = req.user;
		var tokens = str.split(" ");
		for (var i = 0; i < tokens.length; i++) {
			console.log(tokens[i]);
		};

		// Check for create keyword operator
		if(tokens[0] === '+') {
			createKeyword(tokens);
		}

	}
	
	
}