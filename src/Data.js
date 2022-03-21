const BALANCE_NAME = 'Balances';
const ACCESS_TOKEN_NAME = 'Access Token';
const API_URL = "https://birdboombox.com/api/";
const axios = require('axios');

// Saves the balances to localStorage
export function saveBalances(balance) {
    localStorage.setItem(BALANCE_NAME, JSON.stringify(balance.Balance.accounts));
}

export function getApiUrl() {
    return { API_URL }
}

// Gets the balances from Plaid Servers
export function getBalances(accessToken) {
    if(accessToken) {
        return axios.post(API_URL + "getBalance",
            {"access_token": accessToken})
            .then(response => response.data.Balance.accounts);
    } else {
        return new Promise(() => null);
    }
}

// Gets the balances saved to localStorage
export function getSavedBalances() {
    let balance = JSON.stringify(localStorage.getItem(BALANCE_NAME));
    return { balance }
}

// Gets the Link_Token from Plaid Servers
export function getLinkToken() {
    return axios.get(API_URL + "create_link_token")
        .then(response => response.data.link_token);
}

// Gets the Access_Token from Plaid Servers

// TODO: Make sure to put this useState where we need it
/*export function getAccessToken() {
    return usePlaidLink({
        token: getLinkToken(),
        onSuccess: (public_token, metadata) => {
            axios.post("https://birdboombox.com/api/exchange_public_token",
                {"public_token": public_token})
                .then(response => response.data.access_token);
        }
    });
}*/

//Saves the Access_Token to localStorage
function saveAccessToken(accessToken) {
    localStorage.setItem(ACCESS_TOKEN_NAME, JSON.stringify(accessToken))
}

