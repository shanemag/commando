
exports.index = function(req, res) {

    res.render('index', { title: 'Commando', user: req.user });

}