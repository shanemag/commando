var express = require('express');
var mongoStore = require('connect-mongo')(express);
  
module.exports = function (app, config, passport) {
    
    app.set('showStackError', true);
    app.use(express.compress());
    app.use(express.favicon());
    app.use(express.static(config.root + '/public'));
    app.use(express.logger('dev'));
    app.set('views', config.root + '/views');
    app.set('view engine', 'jade');
     // cookieParser should be above session
    app.use(express.cookieParser());

    // bodyParser should be above methodOverride
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    // express/mongo session storage
    app.use(express.session({
      secret: 'noobjs',
      store: new mongoStore({
        url: config.db,
        collection : 'sessions'
      })
    }));

    // dynamic view helper function to enable use of req variable in views (for req.user)
    app.use(function (req, res, next) {
      res.locals.req = req;
      next();
    });
  
    app.use(passport.initialize());
    app.use(passport.session());
    
    app.configure('development', function(){
        app.use(express.errorHandler());
    });

    // use express' router
    app.use(app.router);
    
     // assume "not found" in the error msgs
    // is a 404. this is somewhat silly, but
    // valid, you can do whatever you like, set
    // properties, use instanceof etc.
    app.use(function(err, req, res, next){
      // treat as 404
      if (~err.message.indexOf('not found')) return next();

      // log it
      console.error(err.stack);

      // error page
      res.status(500).render('500', { error: err.stack });
    });

    // assume 404 since no middleware responded
    app.use(function(req, res, next){
      res.status(404).render('404', { url: req.originalUrl });
    });
}
    
    