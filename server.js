var httpServer = require('./servers/http'),
  resources = require('./resources/model');
var onoff = require('onoff');
var dhtPlugin = require('./plugins/DHT22SensorPlugin');
var Gpio = require('onoff').Gpio;
actuator = new Gpio(4, 'out');
const fs = require('fs');

const request = require('request');

dhtPlugin.start({
  'simulate': false,
  'frequency': 10000
});

var server = httpServer.listen(resources.pi.port, function() {
  console.info('RaspberryPi 3 is running on port %s',
    resources.pi.port);
  console.info('Hardware %s actuator started!' + actuator.readSync(), pluginName);
});

var actuator, interval;
var model = resources.pi.actuators.leds['1'];
var pluginName = model.name;


exports.switchOnOff = function() {
  actuator.write(model.value === true ? 1 : 0, function() {
    console.info('Changed value of %s to %s', pluginName, model.value);
  });
};



var sendRequest = function() {
  console.log('request send to bootnode');
request.post(
  'http://172.20.10.2:3500/store', {
    json: {
      remoteId: 'http://172.20.10.9:8484/pi'
    }
  },
  function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('request response recieved');
    }
  }
);
}

sendRequest();

setTimeout(() => {
  console.log('wrote ' + resources.pi.sensors.temperature.value);
  fs.writeFileSync('temperature_log.json', JSON.stringify(resources.pi.sensors.temperature.value));
}, 3000);
