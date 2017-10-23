var express = require('express'),
  router = express.Router(), //#A
  resources = require('./../resources/model');

var model = resources.pi.sensors;

router.route('/').get(function (req, res, next) {
  res.send(model.sensors);

});

router.route('/temperature').get(function (req, res, next) {
  res.send(model.temperature);

});

router.route('/temperature/value').get(function (req,res,next){
  res.send({
    temp: model.temperature.value
  });
});

router.route('/humidity').get(function (req, res, next) {
  res.send = (model.humidity);

});

module.exports = router;
