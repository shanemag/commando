var fs = require('fs');

module.exports = function() {
    console.log('Loading routes from: ' + __dirname);
    fs.readdirSync(__dirname).forEach(function(file) {
    	if (file === "index.js" || file.substr(file.lastIndexOf('.') + 1) !== 'js')
            return;
        var name = file.substr(0, file.indexOf('.'));
        console.log('Adding route:' + name);
        require('./' + name);
    }); 
}