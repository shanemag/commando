var passport = require('passport');

exports.auth = function(req, res) {

  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile',
                                            'https://www.googleapis.com/auth/userinfo.email'] });
  
  function(req, res) {
    // The request will be redirected to Google for authentication, so this
    // function will not be called.
  });

}