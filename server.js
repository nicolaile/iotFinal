var httpServer = require('./servers/http'),
    resources = require('./resources/model');

var dhtPlugin = require('./plugins/DHT22SensorPlugin');

dhtPlugin.start({'simulate': false, 'frequency': 10000});

var server = httpServer.listen(resources.pi.port, function () {
    console.info('RaspberryPi is running on port %s',
    resources.pi.port);
    });
