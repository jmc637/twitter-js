const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const app = express();

const people = [{name: 'Samir'}, {name: 'Julius'}, {name: 'Omri'}];

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

const server = app.listen(3000, function () {
  console.log('Im awake')
});

const io = socketio.listen(server);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use('/', routes);