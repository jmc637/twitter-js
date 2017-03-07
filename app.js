const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const socketio = require('socket.io');

const app = express();


// Templating
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

const server = app.listen(3000, function () {
  console.log('Im awake');
});

const io = socketio.listen(server);

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use('/', routes(io));