
var exports = module.exports = {};

const 
    Client = require('node-rest-client').Client;

var restClient = new Client();

function parseResp(data){
    
}

exports.get = function(){

    var URL_HOTEL = "";
    restClient.get(URL_HOTEL, function (data, res) {
        // parsed response body as js object 
        console.log(data);
        
        parseResp(data);
    });
}