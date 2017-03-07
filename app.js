const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const app = express();

const people = [{name: 'Samir'}, {name: 'Julius'}, {name: 'Omri'}];

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.listen(3000, function () {
  console.log('Im awake')
});



app.use(morgan('tiny'));
app.use(express.static('public'));
app.use('/', routes);