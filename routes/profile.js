var mongoose = require('mongoose');
var Keyword = mongoose.model('Keyword');

module.exports = function (req, res) {

	Keyword.listUsersKeywords(req.user, function (err, keywords) {
		if (err) return res.render('500');
		res.render('profile', {keywords:keywords} );
	});
}
