
const
  bodyParser = require('body-parser'),
  express = require('express'),
  https = require('https'),
  request = require('request'),
  obba_obj = require("./obba.js"),
  translate_obj = require("./translate.js"),
translate = require('translate-api'),

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
    console.log(data);
    var msg = data.message;
    console.log(msg);
    msg = msg.substring(4,msg.length);
    console.log(msg);

    let transText = 'こんにちは世界';
    translate.getText(msg,{to: 'en'}).then(function(text){
      console.log(text)
      var res = text;//JSON.parse(text);
      console.log(res.text);
      var header = {
      'Content-Type': 'application/json'
      }
      var stst = `{"color":"green","message":"${res.text}","notify":false,"message_format":"text"}`;
      var opt = {
          url: process.env.AUTH_Playing_Room,
          method: 'POST',
          headers: header,
          body: stst
      };  
      request(opt);
    });  
});  

//POST /obba
app.post('/english_team_tr', function (req, res) {
  
    var data =  req.body.item.message;  
}); 

// Tell our app to listen on port 
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
