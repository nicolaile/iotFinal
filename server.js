var httpServer = require('./servers/http'),
    resources = require('./resources/model');

var dhtPlugin = require('./plugins/DHT22SensorPlugin');
//var ledPlugin = require('./plugins/ledsPlugin');


dhtPlugin.start({'simulate': true, 'frequency': 10000});
//ledPlugin.start({'simulate':false});

var server = httpServer.listen(resources.pi.port, function () {
    console.info('RaspberryPi 3 is running on port %s',
    resources.pi.port);
    });
