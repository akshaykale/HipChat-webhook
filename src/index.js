
const
  bodyParser = require('body-parser'),
  express = require('express'),
  https = require('https'),
  request = require('request'),
  obba_obj = require("./obba.js"),
  translate_obj = require("./translate.js"),

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
  
    var data =  req.body.item.message;

    translate_obj.translate(data);
  
});  

// Tell our app to listen on port 
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});