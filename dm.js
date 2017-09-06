const noEyes = require('./api/noEyes.js');
const Twit = require('twit');
const T = new Twit({
    consumer_key: noEyes.twit.api.apiKey,
    consumer_secret: noEyes.twit.api.apiSecret,
    access_token: noEyes.twit.access.token,
    access_token_secret: noEyes.twit.access.tokenSecret
});

exports.dm = function(screen_name) {
    T.post("direct_messages/new", {
        screen_name,
        text: 'my dude, did you understand the Twin Peaks finale?'
    }, function(err, data, response) {
        if(err) {
            console.log(err);
        } else {
            console.log('success!');
        }
    });
}