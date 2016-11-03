var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3055;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var friend = [{	
  "name":"",
  "photo": "",
  "scores":[]
}]

// ==============================Actual Routes=========================

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/friend', function (req, res) {
	res.sendFile(path.join(__dirname, 'survey.html'));
});

// ===============================API Routes=======================================

app.get('/api/friend', function(req, res) {
	var param = req.params.friend;
    res.json(friend);
    
});

app.post('/api/friend', function (req, res) {
   // req.body hosts is equal to the JSON post sent from the user
   var newFriend = req.body;
   console.log(newFriend);
   // We then add the json the user sent to the character array
   friend.push(newFriend);
   // We then display the JSON to the users
   res.json(newFriend);
});

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});

