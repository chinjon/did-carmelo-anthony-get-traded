// const express = require('express');
// const app = express();
// app.set('port', (process.env.PORT || 3000));

const noEyes = require('./api/noEyes.js');
const {sendEmail} = require('./mail.js');
const Twit = require('twit');
const T = new Twit({
    consumer_key: noEyes.twit.api.apiKey,
    consumer_secret: noEyes.twit.api.apiSecret,
    access_token: noEyes.twit.access.token,
    access_token_secret: noEyes.twit.access.tokenSecret
});

const filterCarmelo = (tweet) => {
    return tweet.toLowerCase() === "knick";
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
    tweets.map(tweet => {
        if(tweet.text.split(" ").filter(filterFunc).length > 0) {
            console.log(tweet.text);
        }
    });
};

// checkReporter('wojespn');
// checkReporter('IanBegley')
// .then(tweets => {
//     tweets.data.map(tweet => {
//        if(tweet.text.split(" ").filter(filterCarmelo).length > 0) {
//            console.log(tweet.text)
//        }
//     })
// })
// .catch(err => console.log(err));

const sendText = () => {
    sendMsg('Carmelo Anthony Has Been Traded');
}

checkReporter('IanBegley')
    .then(tweets => {returnTweetsWithFilter(tweets.data, filterCarmelo)})
    .catch(err => console.log(err));

// function checkMelo() {
//     return new Promise((resolve, reject) => {

//     })
// }


// need to reconstruct promise


// app.listen(app.get('port'), function () {
//     console.log('App is running, server is listening on port ', app.get('port'));
// });