
exports.parser = function(req, res) {

	var search = req.query.command;
	console.log(search);

	res.render('index');
	
}