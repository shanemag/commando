var passport = require('passport');

exports.authcb = function(req, res) {

	passport.authenticate('google', { failureRedirect: '/loginfail' });

	function(req, res) {
	  res.redirect('/');
	});
}