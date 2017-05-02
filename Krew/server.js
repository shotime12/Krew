var express = require('express');
var path = require('path');
var root = __dirname;

var app = express();


app.use(express.static(path.join(root, 'client')))
app.use(express.static(path.join(root, 'node_modules')))
app.use(express.static(path.join(root, 'bower_components')))


app.listen(8000, function(){
	console.log('listening in port 8000')
})
