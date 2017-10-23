var express = require('express'),
    actuatorsRoutes = require('./../routes/actuators'),
    sensorRoutes = require('./../routes/sensors'),
    resources = require('./../resources/model'),
    cors = require('cors'),
    bodyParser = require('body-parser');

var resources = require('./../resources/resources.json');

const hbs = require('handlebars');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

var app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/pi/actuators', actuatorsRoutes);

app.use('/pi/sensors', sensorRoutes);

app.get('/pi', function (req, res) {
  res.render('home.hbs');
});

module.exports = app;
