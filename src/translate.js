  
var exports = module.exports = {};

const 
    Client = require('node-rest-client').Client;

var restClient = new Client();
  
//const Translate = require('@google-cloud/translate');


exports.translate = function(message){

  var msg = message.message;
  msg = msg.substring(4,msg.length);

    var URL = "https://rakuten.hipchat.com/v2/room/3414317/notification?auth_token="+process.env.AUTH;


      var args_trans = {
        translateRequest: {
            "text": msg,
            "from": "",
            "to": "en"
            },
        headers: { "Content-Type": "application/json" }
      };

    var translateURL = "http://www.transltr.org/api/translate";

    restClient.post(translateURL, args_trans, function (data_tr, res) {
        // parsed response body as js object
    //var data_tr = JSON.parse(data_t);
    console.log(data_tr);
    
    var trans_body = data_tr.body;
    
    console.log(JSON.stringify(trans_body));
    
    trans_body = JSON.parse(trans_body);

    console.log(JSON.stringify(trans_body));
    var args = {
        data: {
            "color":"green",
            "message":trans_body.translationText,
            "notify":false,
            "message_format":"text"
        },
        headers: { "Content-Type": "application/json" }
      };
        restClient.post(URL, args, function (data, res) {
        // parsed response body as js object 
        console.log(data);  
      });


    console.log();  
    });

 /* //const translate = require('google-translate-api');

    translate('Ik spreek Engels', {to: 'en'}).then(res => {
        console.log(res.text);
        //=> I speak English
        console.log(res.from.language.iso);
        //=> nl
      var args = {
        data: {
            "color":"green",
            "message":res.text,
            "notify":false,
            "message_format":"text"
        },
        headers: { "Content-Type": "application/json" }
      };
        restClient.post(URL, args, function (data, res) {
        // parsed response body as js object 
        console.log(data);  
      });

    }).catch(err => {
        console.error(err);
    });
*/
/*  // Instantiates a client
  const translate = Translate();

  // The text to translate, e.g. "Hello, world!"
  // const text = 'Hello, world!';

  // The target language, e.g. "ru"
  const target = 'en';

  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  translate.translate(msg, target)
    .then((results) => {
      let translations = results[0];
      translations = Array.isArray(translations) ? translations : [translations];
      console.log('Translations:');
      
      var trans = "";

      translations.forEach((translation, i) => {
        console.log(`${text[i]} => (${target}) ${translation}`);
        trans += translation +"\n";
      });

      var args = {
        data: {
            "color":"green",
            "message":textArray[randomNumber]+message.from.name,
            "notify":false,
            "message_format":"text"
        },
        headers: { "Content-Type": "application/json" }
      };
        restClient.post(URL, args, function (data, res) {
        // parsed response body as js object 
        console.log(data);  
      });
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });*/





}