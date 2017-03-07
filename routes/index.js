const express = require('express');
const path = require('path');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', {tweets: tweets});
});

module.exports = router;



