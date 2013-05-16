module.exports = function(req, res) {

    res.render('index', { title: 'Commando', user: req.user, hideNavSearch: true });

}