const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const app = express();


// Templating
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.listen(3000, function () {
  console.log('Im awake');
});

// TODO
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', function(){ /* … */ });
server.listen(3000);
// TODO

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use('/', routes);