
var exports = module.exports = {};

const 
    Client = require('node-rest-client').Client;

var restClient = new Client();

function parseResp(data){
    
}

exports.get = function(message){

    var URL = "https://rakuten.hipchat.com/v2/room/3414317/notification?auth_token="+process.env.AUTH;

    var textArray = [
        'nani-kore ',
        'heeeeennneeeeee ',
        '(areyoukiddingme) are you kidding me ',
        '(ohcrap) 7F sucks '
    ];
    var randomNumber = Math.floor(Math.random()*textArray.length);
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
        
        //parseResp(data);
    });
}