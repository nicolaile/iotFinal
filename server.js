var httpServer = require('./servers/http'),
    resources = require('./resources/model');

var dhtPlugin = require('./plugins/DHT22SensorPlugin');

dhtPlugin.start({'simulate': true, 'frequency': 10000});

var server = httpServer.listen(resources.pi.port, function () {
    console.info('Your WoT Pi is up and running on port %s',
    resources.pi.port);
    });
