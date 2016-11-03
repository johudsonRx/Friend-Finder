var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// var server = http.createServer(handleRequest);
var tables = [{
 name: 'Tyler',
 phoneNumber: '777-7777',
 email: 'tygee713@gmail.com',
 uniqueID: '12345'
}];

var waitlist = [{
 name: 'Moe',
 phoneNumber: '999-9999',
 email: 'moe@gmail.com',
 uniqueID: '6789'
}];

var reservation = [{
	name: "",
	phoneNumber: "",
	email: "",
	uniqueID: "",
}]

app.get('/api/:tables?', function(req, res) {
	var param = req.params.tables;

	if (param == 'tables'){
 res.json(tables);
}
	else if (param == 'waitlist'){
  res.json(waitlist);
}
});


app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', function (req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reservation', function (req, res) {
	res.sendFile(path.join(__dirname, 'reservation.html'));
});

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});

app.post('/api/tables', function (req, res) {
   // req.body hosts is equal to the JSON post sent from the user
   var newReserve = req.body;

   console.log(newReserve);

   // We then add the json the user sent to the character array
   tables.push(newReserve);

   // We then display the JSON to the users
   res.json(newReserve);
});

app.post('/api/waitlist', function (req, res) {
   // req.body hosts is equal to the JSON post sent from the user
   var newReserve = req.body;

   console.log(newReserve);

   // We then add the json the user sent to the character array
   waitlist.push(newReserve);

   // We then display the JSON to the users
   res.json(newReserve);
});