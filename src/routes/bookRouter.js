var express = require('express');
var bookRouter = express.Router();
var mysql = require('mysql');

var DBconnection = require('../../mySqlConnection');

var router = function (nav) {

    bookRouter.route('/')
        .get(function (req, res) {
            DBconnection.query('SELECT b.* FROM books b', function (error, results, fields) {
                if (error) throw error;

                res.render('booksListView', {
                    title: 'Books',
                    nav: nav,
                    books: results
                });
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;

            DBconnection.query('SELECT b.* FROM books b where b.id = ' + id , function (error, results, fields) {
                if (error) throw error;

                res.render('bookDetailView', {
                    title: 'Book Detail',
                    nav: nav,
                    book: results[0]
                });
            });
        });

    return bookRouter;

};

module.exports = router;