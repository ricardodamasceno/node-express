var express = require('express');
var handlebars = require('express-handlebars');
var app = express();

//Number of the port
var port = process.env.PORT || 5000;

//MySQL
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'books'
});

connection.connect();

var nav = [
    {link: 'Books', text: 'Books'},
    {link: 'Authors', text: 'Authors'}
];

//Routes
var bookRouter = require('./src/routes/bookRouter')(nav);

//Sets the routes paths
app.use('/books', bookRouter);

// Loads all static files inside the directory
app.use(express.static('public'));
app.set('views', 'src/views');

// Sets the template engine to Handlebars
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [
            {link: 'Books', text: 'Books'},
            {link: 'Authors', text: 'Authors'}
        ]
    });
});

//Sets the port the application will listen
app.listen(port, function (error) {
    console.log('Server running on port ', port);
});

