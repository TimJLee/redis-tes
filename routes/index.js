var express = require('express');
var router = express.Router();
const redis = require('redis');
const redisClient = redis.createClient({
  host : "127.0.0.1",
  port : 6379,
  db : 0
});

/* GET home page. */
router.get('/', function(req, res, next) {
  redisClient.get("name", (err, result) =>{
    console.log(result)
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
