
var exports = module.exports = {};
var Client = require('node-rest-client').Client;
var restClient = new Client();

exports.get = function(message){

    var URL = "https://rakuten.hipchat.com/v2/room/3414317/notification?auth_token="+process.env.AUTH;

    var textArray = [
        'nani-kore ',
        'heeeeennneeeeee ',
        '(areyoukiddingme) are you kidding me ',
        '(ohcrap) miss 13F '
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
        console.log(data);
    });
}