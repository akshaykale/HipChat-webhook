  
var exports = module.exports = {};
var Client = require('node-rest-client').Client;
var restClient = new Client();

exports.translate = function(message){

  var msg = message.message;
  msg = msg.substring(4,msg.length);

  var URL = "https://rakuten.hipchat.com/v2/room/3414317/notification?auth_token="+process.env.AUTH;
  var translateURL = "http://www.transltr.org/api/translate?text="+encodeURI(msg)+"&to=en";

  restClient.get(translateURL, function (data_tr, res) {
    
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
}