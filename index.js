const accountSid = 'AC6a2fa90cd681242f9d88219e53285ceb';
const myVarr = require('./myToken.js');
const client = require('twilio')(accountSid, myVarr.token1);
// the authToken is hidden

exports.handler = async (event) => {
    console.log("Sending that ish")

    var myarr = ['+18189847959', '+16262611797', '+18189124903'];
    for (let i =0; i<myarr.length; i++) {
        client.messages
        .create({
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: '+12136992343',
            to: myarr[i]
        })
        .then(message => console.log(message.sid))
        .done();
    }


    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

exports.handler()

