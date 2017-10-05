var express = require('express');

var app = express();

//Number of the port
var port = 5000;

//Loads all static files inside the directory
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

//Sets the port the application will listen
app.listen(port, function (error) {
    console.log('Server running on port ', port);
});