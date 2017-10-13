var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

//Number of the port
var port = process.env.PORT || 5000;

var bookRouter = express.Router();

var books = [
    {
        title: 'Repurpose Content to Reach a Wider Audience',
        site: '97thfloor.com'
    },
    {
        title: '14 Useful Sites for Designers',
        site: 'devgarage.com'
    },
    {
        title: 'Measuring Your Link Building with Google Analytics',
        site: 'searchenginewatch.com'
    },
    {
        title: 'Dramatically Raise the Value of Any Piece of Content with These 27 Tactics',
        site: 'searchenginewatch.com'
    },
    {
        title: 'TrendPaper - Whats Trending in the World',
        site: 'betali.st'
    }
];

//Loads all static files inside the directory
app.use(express.static('public'));
app.set('views', 'src/views');

//Sets the template engine to Handlebars
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

bookRouter.route('/')
    .get(function (req, res) {
        res.render('books', {
            title: 'Books',
            nav: [
                {link: 'Books', text: 'Books'},
                {link: 'Authors', text: 'Authors'}
            ],
            books: books
        });
    });

bookRouter.route('/detail')
    .get(function (req, res) {
        res.send('Hello Book details');
    });

app.use('/books', bookRouter);

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