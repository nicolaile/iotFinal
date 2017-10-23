var express = require('express'),
  router = express.Router(),
  resources = require('./../resources/model');
var server = require('./../server');
const request = require('request');

  router.route('/').get(function (req, res, next) {
   res.send(resources);
  });

  router.route('/leds').get(function (req, res, next) {
    res.send(resources.pi.actuators.leds);
  });

  router.route('/leds/:id').get(function (req, res, next) {
    res.send(resources.pi.actuators.leds[req.params.id]);
  }).put(function(req,res,next){

   var myLed = resources.pi.actuators.leds[req.params.id];
   myLed.value = req.body.value;

   server.switchOnOff();

   console.info('put request done');
      res.send(myLed.value);
  });

  module.exports = router;
