const express = require('express');
const path = require('path');
const router = express.Router();


const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', {tweets: tweets});
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find({'name': name});
  console.log(list);
  console.log(tweetBank.list());
  res.render( 'profile', {name:name, tweets: list, showForm: true});
});

router.post('/tweets', function (req, res) {
  tweetBank.add(req.body.name, req.body.text);
  res.redirect('/')

});

router.get('/tweet/:id', function(req, res) {
  var id = req.params.id;
  var tweets = tweetBank.find({'id': id});
  console.log(tweets);
  console.log(tweetBank.list());
  res.render( 'tweet', {tweets: tweets});
});

module.exports = router;



