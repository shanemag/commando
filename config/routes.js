var routes = require('../routes');

module.exports = function (app, passport) {

  // routes
  app.get('/', routes.index);
  app.get('/logout', function(req, res) {
  
      // this function only works if its a parameter here directly, may need to cleanup/redesign route files
      req.logout();
      res.redirect('/');

  });
  app.get('/auth/google',
    // same problem here as above
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile',
                                            'https://www.googleapis.com/auth/userinfo.email'] }),
    function(req, res){
    // The request will be redirected to Google for authentication, so this
    // function will not be called.
  });

  app.get('/oauth2callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
  });

}