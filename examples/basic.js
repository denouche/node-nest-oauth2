var NestOAuth2 = require('../src/nest-oauth2');

var clientId = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    secretId = 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    myNestOauth2 = new NestOAuth2(clientId, secretId);

// Token have the following form:
// { 
//   "access_token":"STRING", "expires_in":LONG 
// }

myNestOauth2.hasValidToken(); // false
myNestOauth2.getOAuthAccessToken(); // null
myNestOauth2.getConnectionURL('optionalStateParameter'); // The connexion URL to get the authorization of the client.

// After the authorization is successfull, a PIN CODE is given

// Now get an access_token
myNestOauth2.connect('PIN CODE'); // return a Promise with the token

myNestOauth2.getOAuthAccessToken(); // return your token
