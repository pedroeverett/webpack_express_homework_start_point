var express = require('express');
var router = new express.Router();

router.use('/films', require('.films.js'));

// router.get('/', function(req, res) {
//   res.sendFile('../client/build/index.html');
// });

router.get('/', function(req, res) {
  res.json({data: 'Welcome!'});
});

module.exports = router;