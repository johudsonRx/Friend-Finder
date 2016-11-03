
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('/api/:tables?', function(req, res) {
 res.json(tables);
})

app.post('/api/reservation', function (req, res) {
   // req.body hosts is equal to the JSON post sent from the user
   var newRes = req.body;

   console.log(newReserve);

   // We then add the json the user sent to the character array
   reservation.push(newReserve);

   // We then display the JSON to the users
   res.json(newReserve);
});

app.post('/api/tables', function (req, res) {
   // req.body hosts is equal to the JSON post sent from the user
   var newTable = req.body;

   console.log(newTable);

   // We then add the json the user sent to the character array
   table.push(newTable);

   // We then display the JSON to the users
   res.json(newTable);
});