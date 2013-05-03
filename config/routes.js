var routes = require('../routes');
var home = require('../routes/parser');
var logout = require('../routes/logout');
var parser = require('../routes/parser');

module.exports = function (app, passport) {

  // routes. requiring each route in each statement is probably unnecessary overhead but will have to do for the time being
  app.get('/',  require('../routes/home'));
  app.get('/logout', require('../routes/logout'));
  app.get('/parse',  require('../routes/parser'));
  app.get('/auth/google',  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile',
                                            'https://www.googleapis.com/auth/userinfo.email'] }),
                                               function(req, res) {} );
  app.get('/oauth2callback',  passport.authenticate('google', { failureRedirect: '/loginfail' }), function(req, res) {
    res.redirect('/');
  }); 

}