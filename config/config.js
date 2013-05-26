module.exports = {
    development: {
      root: require('path').normalize(__dirname + '/..'),
      app: {
        name: 'Commando'
      },
      db: 'mongodb://maguis26:bgepjyqm@linus.mongohq.com:10034/commando',
      googleurl: 'http://www.google.com/search?q=',
      google: {
          clientID: "137101343545.apps.googleusercontent.com"
        , clientSecret: "830j4X5kEJlKs-EVH1NAELuQ"
        , callbackURL: "http://127.0.0.1:3000/oauth2callback"
      } 
    }
  , production: {
        root: require('path').normalize(__dirname + '/..'),
      app: {
        name: 'Commando'
      },
      db: 'mongodb://maguis26:bgepjyqm@linus.mongohq.com:10034/commando',
      googleurl: 'http://www.google.com/search?q=',
      google: {
          clientID: "761773210542.apps.googleusercontent.com"
        , clientSecret: "K8CBSg-cCxDyasBfawFokGkB"
        , callbackURL: "http://maguis26-commando.jit.su//oauth2callback"
      } 
    } 
} 