const noEyes = require('./../api/noEyes.js');
const Twit = require('twit');
const T = new Twit({
    consumer_key: noEyes.twit.api.apiKey,
    consumer_secret: noEyes.twit.api.apiSecret,
    access_token: noEyes.twit.access.token,
    access_token_secret: noEyes.twit.access.tokenSecret
});

T.get("users/lookup", { screen_name: "chin_jon"}, function(err, data, response){
    console.log(data[0].id);
});