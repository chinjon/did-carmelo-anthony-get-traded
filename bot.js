const express = require('express');
const app = express();
app.set('port', (process.env.PORT || 3000));

const noEyes = require('./api/noEyes.js');
const Twit = require('twit');
const T = new Twit({
    consumer_key: noEyes.twit.api.apiKey,
    consumer_secret: noEyes.twit.api.apiSecret,
    access_token: noEyes.twit.access.token,
    access_token_secret: noEyes.twit.access.tokenSecret
});

function filterCarmelo(tweet) {
    return tweet.toLowerCase() === "carmelo"
}

function checkReporter(screen_name) {
   return T.get('statuses/user_timeline', {
        screen_name,
        q: "carmelo",
        exclude_replies: true,
        count: 3,
        trim_user: true,
        include_rts: false,
    }, function (err, data, response) { });
};

// checkReporter('wojespn');
checkReporter('IanBegley')
.then(tweets => {
    tweets.data.map(tweet => {
        console.log(tweet.text.split(" "))
    })
})
.catch(err => console.log(err));

app.listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});