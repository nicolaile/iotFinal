var express = require('express'),
    actuatorsRoutes = require('./../routes/actuators'),
    sensorRoutes = require('./../routes/sensors'),
    resources = require('./../resources/model'),
    cors = require('cors'),
    bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/pi/actuators', actuatorsRoutes);

app.use('/pi/sensors', sensorRoutes);

app.get('/pi', function (req, res) {
  res.send('Hello guys!')
});

module.exports = app;
