var express = require('express');
var bookRouter = express.Router();
var mysql = require('mysql');

var router = function (nav) {

    var books = [
        {
            id: 0,
            title: 'Repurpose Content to Reach a Wider Audience',
            site: '97thfloor.com'
        },
        {
            id: 1,
            title: '14 Useful Sites for Designers',
            site: 'devgarage.com'
        },
        {
            id: 2,
            title: 'Measuring Your Link Building with Google Analytics',
            site: 'searchenginewatch.com'
        },
        {
            id: 3,
            title: 'Dramatically Raise the Value of Any Piece of Content with These 27 Tactics',
            site: 'searchenginewatch.com'
        },
        {
            id: 4,
            title: 'TrendPaper - Whats Trending in the World',
            site: 'betali.st'
        }
    ];

    bookRouter.route('/')
        .get(function (req, res) {

            var connection = mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : 'root',
                database : 'books'
            });

            connection.query('SELECT * FROM books', function (error, results, fields) {
                if (error) throw error;
                console.log('Result :', results);
            });

            res.render('booksListView', {
                title: 'Books',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookDetailView', {
                title: 'Book Detail',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;

};

module.exports = router;