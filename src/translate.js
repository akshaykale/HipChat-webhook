  
var exports = module.exports = {};
var Client = require('node-rest-client').Client;
var restClient = new Client();

exports.translate = function(message){

  var msg = message.message;
  msg = msg.substring(4,msg.length);

  var URL = "https://rakuten.hipchat.com/v2/room/3414317/notification?auth_token="+process.env.AUTH;
  var translateURL = "http://www.transltr.org/api/translate?text="+encodeURI(msg)+"&to=en";

/*  restClient.get(translateURL, function (data_tr, res) {
    
    var args = {
        data: {
            "color":"green",
            "message":data_tr.translationText,
            "notify":false,
            "message_format":"text"
        },
        headers: { "Content-Type": "application/json" }
      };
      restClient.post(URL, args, function (data, res) {
      });
    console.log();  
    });

*/
    var request = require('request');

    var dataString = `{"text": "${msg}","from": "","to": "en"}`;

    var header = {
    'Content-Type': 'application/json'
    }

    var options = {
        url: 'http://www.transltr.org/api/translate',
        method: 'POST',
        body: dataString,
        headers: header
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body.translationText);
            restClient.get(translateURL, function (data_tr, res) {
    
            var args = {
                data: {
                    "color":"green",
                    "message":body.translationText,
                    "notify":false,
                    "message_format":"text"
                },
                headers: { "Content-Type": "application/json" }
            };
            restClient.post(URL, args, function (data, res) {
              });
                    console.log("ERROR");  
            });
        }else   
        console.log(response);
    }

    request(options, callback);





}