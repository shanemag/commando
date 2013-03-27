module.exports = {
    development: {
      root: require('path').normalize(__dirname + '/..'),
      app: {
        name: 'Commando'
      },
      db: 'mongodb://maguis26:bgepjyqm@linus.mongohq.com:10034/commando',
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
      }, */
      google: {
          clientID: "761773210542-9k70stvvnbbhoe3fbq14dnh7c769qgtl.apps.googleusercontent.com"
        , clientSecret: "N0CXXDHYFfJj56mO-wTTL9OT"
        , callbackURL: "https://project-livec9640dd85ff0.rhcloud.com/oauth2callback"
      } 
    }
  , test: {

    }
  , production: {
        root: require('path').normalize(__dirname + '/..'),
      app: {
        name: 'Commando'
      },
      db: 'mongodb://maguis26:bgepjyqm@linus.mongohq.com:10034/commando',
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
      }, */
      google: {
          clientID: "761773210542.apps.googleusercontent.com"
        , clientSecret: "K8CBSg-cCxDyasBfawFokGkB"
        , callbackURL: "https://commando-case4fyp.rhcloud.com/oauth2callback"
      } 
    }
}