var routes = require('../routes');

module.exports = function (app, passport) {

  // routes
  app.get('/', routes.index);
  app.get('/logout', routes.logout);
  app.get('/auth/google',
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