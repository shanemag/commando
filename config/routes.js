var routes = require('../routes');
var home = require('../routes/home');
var logout = require('../routes/logout');
var parser = require('../routes/parser');
var profile = require('../routes/profile');
module.exports = function (app, passport) {

  // routes. requiring each route in each statement is probably unnecessary overhead but will have to do for the time being
  app.get('/',  home);
  app.get('/logout', logout);
  app.get('/parse',  parser);
  app.get('/profile', profile);
  app.get('/auth/google',  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile',
                                            'https://www.googleapis.com/auth/userinfo.email'] }),
                                               function(req, res) {} );
  app.get('/oauth2callback',  passport.authenticate('google', { failureRedirect: '/loginfail' }), function(req, res) {
    res.redirect('/');
  }); 

}