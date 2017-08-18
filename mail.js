var SparkPost = require('sparkpost');
const noEyes = require('./api/noEyes.js');
var client = new SparkPost(noEyes.sparkpost.key);


function sendEmail() {

    client.transmissions.send({
            options: {
                sandbox: true
            },
            content: {
                from: 'testing@sparkpostbox.com',
                subject: 'Hello, World!',
                html: '<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
            },
            recipients: [{
                address: 'indieslap@gmail.com'
            }]
        })
        .then(data => {
            console.log('Woohoo! You just sent your first mailing!');
            console.log(data);
        })
        .catch(err => {
            console.log('Whoops! Something went wrong');
            console.log(err);
        });
}

module.export = sendEmail;