var httpServer = require('./servers/http'),
    resources = require('./resources/model');
var onoff = require('onoff');
var dhtPlugin = require('./plugins/DHT22SensorPlugin');
var Gpio = require('onoff').Gpio;
actuator = new Gpio(4, 'out'); //#D

dhtPlugin.start({'simulate': true, 'frequency': 10000});
//ledPlugin.start({'simulate':false});

var server = httpServer.listen(resources.pi.port, function () {
    console.info('RaspberryPi 3 is running on port %s',
    resources.pi.port);
    console.info('Hardware %s actuator started!' + actuator.readSync(), pluginName);
    });

  var actuator, interval;
  var model = resources.pi.actuators.leds['1'];
  var pluginName = model.name;
//  var localParams = {'simulate': false, 'frequency': 2000};


exports.switchOnOff = function() {
        actuator.write(value === true ? 1 : 0, function () { //#C
          console.info('Changed value of %s to %s', pluginName, value);
        });
  };
