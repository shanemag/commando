var home = require('../routes/index');

module.exports = function (app, passport) {

  // user routes
  app.get('/', home.index);

}