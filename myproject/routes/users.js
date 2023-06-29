var express = require('express');
var router = express.Router();

/* GET users listing. */
const data=[
  {"id":1,
  "name":"ritika",
  "role":"intern",
  "profession":"web developer"},

  {"id":3,
  "name":"tarun",
  "role":"intern",
  "profession":"android developer"},

  {"id":4,
  "name":"nargis",
  "role":"intern",
  "profession":"Java developer"},

  {"id":5,
  "name":"mansi",
  "role":"intern",
  "profession":"full stack developer"},

  {"id":6,
  "name":"shruti",
  "role":"intern",
  "profession":"Web designer"}]
  
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hello', function(req, res, next) {
  res.render('user', { title: 'users' ,name:'user_1'})
});

router.get('/user_data', function(req, res, next) {
  res.render('data', { data})
});

module.exports = router;
