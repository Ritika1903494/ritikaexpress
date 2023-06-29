var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,name:'ritika'});
});

router.get('/page', function(req, res, next) {
  res.render('index', {menuID:'1',page:'Home' });
});

module.exports = router;
