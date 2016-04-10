// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var port  	 = process.env.PORT || 8080; 				// set the port
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');


app.use(express.static(__dirname + '/public'));		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+jsonp' }));
app.use(bodyParser.urlencoded({extended: true}));// override with the X-HTTP-Method-Override header in the request


app.get('*', function(req, res) {
	 res.sendFile( path.join( __dirname, '/public/', 'mainBase.html' )); // load the single view file (angular will handle the page changes on the front-end)
});



// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
