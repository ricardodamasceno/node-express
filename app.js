var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

//Number of the port
var port = process.env.PORT || 5000;

//Loads all static files inside the directory
app.use(express.static('public'));
app.set('views','src/views');

//Sets the template engine to Handlebars
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('index');
});

//Sets the port the application will listen
app.listen(port, function (error) {
    console.log('Server running on port ', port);
});