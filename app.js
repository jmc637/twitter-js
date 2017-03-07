const express = require('express');
var morgan = require('morgan');
var nunjucks = require('nunjucks');
const app = express();

const people = [{name: 'Samir'}, {name: 'Julius'}, {name: 'Omri'}];

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});

app.listen(3000, function () {
  console.log('Im awake')
})

app.use(morgan('tiny'));

app.get('/' , function(req, res, next){
    res.render( 'index', {title: 'Hall of Fame', people: people} );
    next();
})