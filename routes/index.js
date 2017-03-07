const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');

const tweetBank = require('../tweetBank');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );

});

router.post('/tweets', urlencodedParser, function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/users/' + name);
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find({'name': name});
  res.render( 'profile', {name:name, tweets: list, showForm: true});
});

router.get('/tweet/:id', function(req, res) {
  var id = req.params.id;
  var tweets = tweetBank.find({'id': id});
  res.render( 'tweet', {tweets: tweets});
});

module.exports = router;



