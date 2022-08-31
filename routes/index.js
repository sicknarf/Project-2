var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Pic Hunter!' });
});

module.exports = router;
