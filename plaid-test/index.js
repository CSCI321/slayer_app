// includes "dotenv" into our code so it can load the data that is put in the .env file 
require('dotenv').config();

// adds express to the code 
const express = require('express');
const app = express();

// this says that we are going to use body parser 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const path = require('path'); // allows us to easliy concatinate paths 
const util = require('util'); // allows us to inspect json objects 

// Making this process on port 3000 
const PORT = process.env.PORT || 3000;

// Creates our plaid client 
const plaid = require('plaid');
const plaidClient = new plaid.Client({
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    env: plaid.environments.sandbox, // This is where we tell what mode we want to be testing in (sandbox, development, or deployment)
});

// This creates a rount that makes sends an index.html file and serve it 
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// When the page loades it is going to call this to create a link token: https://plaid.com/docs/api/tokens/#linktokencreate 
app.get('/create-link-token', async (req, res) => {
    const { link_token: linkToken } = await plaidClient.createLinkToken({ // This creates the link token with the following paramitors 
        user: {
            client_user_id: 'some-unique-identifier', // We can decide what this ID is 
        },
        client_name: 'App of Tyler',
        products: ['auth', 'identity'], // This is where we say what products we are using 
        country_codes: ['US'],
        language: 'en',
    });

    res.json({ linkToken }); // Passes the link token we created to the "Front End" 
});

// Sends the public token and excange it for an access token 
app.post('/token-exchange', async (req, res) => {
    const { publicToken } = req.body;
    const { access_token: accessToken } = await plaidClient.exchangePublicToken(publicToken); // This is where we exchange the public token for a access token
    console.log(accessToken);

    const authResponse = await plaidClient.getAuth(accessToken); // This is the authorization response that we get after giving plaid our access token
    console.log('Auth response:');
    console.log(util.inspect(authResponse, false, null, true));
    console.log('---------------');

    const identityResponse = await plaidClient.getIdentity(accessToken); // This is the idenity response that we get after giving plaid our access token
    console.log('Identity response:');
    console.log(util.inspect(identityResponse, false, null, true));
    console.log('---------------');

    const balanceResponse = await plaidClient.getBalance(accessToken); // This is the ballence reponse that we get after giving plaid our access token
    console.log('Balance response');
    console.log(util.inspect(balanceResponse, false, null, true));
    console.log('---------------');

    res.sendStatus(200); // Says that everything went according to planned 
});

// Logs what port the process is listining on 
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});
