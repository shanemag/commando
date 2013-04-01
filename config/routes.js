var routes = require('../routes');

module.exports = function (app, passport) {

  // user routes
  app.get('/', routes.index);

}