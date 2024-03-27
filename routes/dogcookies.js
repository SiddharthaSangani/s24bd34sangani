var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dogcookies', { title: 'Search Result Dog Cookies' });
});

module.exports = router;
