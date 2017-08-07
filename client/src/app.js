var UI = require('./views/ui');
var controller = require('../../controllers/index.js');

var app = function(){
  new UI();
}

window.addEventListener('load', app);
