/*

To get this example to work please install 'prompt' dependency using:
npm install prompt

*/


var prompt = require('prompt'),
	NestOAuth2 = require('../src/nest-oauth2');

prompt.start();

prompt.get(['clientId', 'secretId'], function (err, result) {
	myNestOauth2 = new NestOAuth2(result.clientId, result.secretId);
	console.info('Please open this URL to get a PIN code: ' + myNestOauth2.getConnectionURL('optionalStateParameter'));

	prompt.get(['PIN_CODE'], function(err, result) {
		myNestOauth2.connect(result.PIN_CODE)
			.then(function(data) {
				console.info(data);
			}, function(error) {
				console.error(error);
			});
	});
});



