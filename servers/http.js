var express = require('express'),
    actuatorsRoutes = require('./../routes/actuators'),
    sensorRoutes = require('./../routes/sensors'),
    resources = require('./../resources/model'),
    cors = require('cors'),
    bodyParser = require('body-parser');

var resources = require('./../resources/resources.json');

const hbs = require('hbs');


var app = express();


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(bodyParser.json());

app.use(cors());

app.use('/pi/actuators', actuatorsRoutes);

app.use('/pi/sensors', sensorRoutes);

app.get('/pi', function (req, res) {
  res.render('home.hbs');
});

app.get('/pi/sensors/temperature/graph', function (req, res) {
  res.render('tempGraph.hbs', {
  temp: fetchTemp();
});
});

var fetchTemp = () => {
  try {
    var temperature = fs.readFileSync('temperature_log.json');
    return JSON.parse(temperature);
  } catch (e) {
    return [];
  }
};

module.exports = app;
