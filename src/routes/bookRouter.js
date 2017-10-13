var express = require('express');

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

module.exports = bookRouter;