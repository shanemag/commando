module.exports = {

  // app.get('/'...)
  index: function(req, res) {
    res.render('index', { locals:
      { title: 'Commando' }
    });
  }
};
  