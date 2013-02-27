module.exports = {
    development: {
      root: require('path').normalize(__dirname + '/..'),
      app: {
        name: 'Commando'
      },
      db: 'mongodb://shane.maguire7@gmail.com:m4g5tool@linus.mongohq.com:10034/commando',
      /*facebook: {
          clientID: "APP_ID"
        , clientSecret: "APP_SECRET"
        , callbackURL: "http://localhost:3000/auth/facebook/callback"
      },
      twitter: {
          clientID: "CONSUMER_KEY"
        , clientSecret: "CONSUMER_SECRET"
        , callbackURL: "http://localhost:3000/auth/twitter/callback"
      },
      github: {
          clientID: 'APP_ID'
        , clientSecret: 'APP_SECRET'
        , callbackURL: 'http://localhost:3000/auth/github/callback'
      },
      google: {
          clientID: "APP_ID"
        , clientSecret: "APP_SECRET"
        , callbackURL: "http://localhost:3000/auth/google/callback"
      } */
    }
  , test: {

    }
  , production: {

    }
}