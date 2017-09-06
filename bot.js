// const express = require('express');
// const app = express();
// app.set('port', (process.env.PORT || 3000));

const noEyes = require('./api/noEyes.js');
const dm = require('./dm.js');
const Twit = require('twit');
const T = new Twit({
    consumer_key: noEyes.twit.api.apiKey,
    consumer_secret: noEyes.twit.api.apiSecret,
    access_token: noEyes.twit.access.token,
    access_token_secret: noEyes.twit.access.tokenSecret
});

const filterCarmelo = (tweet) => {
    return tweet.toLowerCase() === "melo";
};

const checkReporter = (screen_name) => {
   return T.get('statuses/user_timeline', {
        screen_name,
        q: "",
        exclude_replies: true,
        count: 20,
        include_rts: false,
    });
};

const returnTweetsWithFilter = (tweets, filterFunc ) => {
    let counter = 0;
    tweets.map(tweet => {
        if(tweet.text.split(" ").filter(filterFunc).length > 0) {
            counter++;
        }
    });
    return counter;
};

const sendText = () => {
    sendMsg('Carmelo Anthony Has Been Traded');

}

checkReporter('IanBegley')
    .then(tweets => {
        returnTweetsWithFilter(tweets.data, filterCarmelo) > 0 ? dm.dm("chin_jon") : null
    })
    .catch(err => console.log(err));

// function checkMelo() {
//     return new Promise((resolve, reject) => {

//     })
// }


// need to reconstruct promise


// app.listen(app.get('port'), function () {
//     console.log('App is running, server is listening on port ', app.get('port'));
// });