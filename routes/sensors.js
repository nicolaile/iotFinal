var express = require('express'),
  router = express.Router(), //#A
  resources = require('./../resources/model');

router.route('/').get(function (req, res, next) { //#B
  req.result =resources.pi.sensors;
  next();
});

router.route('/temperature').get(function (req, res, next) { //#E
  req.result=resources.pi.sensors.temperature;
  next();
});

router.route('/humidity').get(function (req, res, next) { //#E
  req.result = resources.pi.sensors.humidity;
  next();
});

module.exports = router;
