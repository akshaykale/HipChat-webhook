
const
  bodyParser = require('body-parser'),
  express = require('express'),
  https = require('https'),
  request = require('request'),
  obba_obj = require("./obba.js"),

// Create a new instance of express
 app = express();

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.raw({ extended: false }));
//app port
app.set('port', process.env.PORT || 5000);

//POST /obba
app.post('/obaa', function (req, res) {
  
    console.log(JSON.stringify(req.data));

    obba_obj.get();

    //logger.log("Failed validation. Make sure the validation tokens match.");
    //res.sendStatus(403);
  
});  

//POST /gora/hotels
/*app.get('/gora/hotels', function (req, res) {
  var cin = req.query.cin; //JSON object with all the request data
  var cout = req.query.cout;
  var lat = req.query.lat;// || null;
  var lng = req.query.lng;
  //data = JSON.parse(data);
  //logger.log("REQUEST params: -> "+ JSON.stringify(data));
  if (cin && cout && lat && lng) {
    
    hotels.get(cin, cout, lat, lng, res);

  } else {
    logger.log("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});  
*/

// Tell our app to listen on port 
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});