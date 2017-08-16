const noEyes = require('./api/noEyes.js');
const twilio = require('twilio');

const accountSid = noEyes.twil.testSid;
const authToken = noEyes.twil.testAuth;

const client = new twilio(accountSid, authToken);

const sendMsg = (body, to, from) => {
    client.messages.create({
       body,
       to,
       from, 
    })
    .then(message => console.log(message.sid));
};

module.export = sendMsg;