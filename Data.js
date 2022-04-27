const BALANCE_NAME = 'Balances';
const TRANSACTION_NAME = 'Transactions'
const ACCESS_TOKEN_NAME = 'Access Token';
const API_URL = "https://birdboombox.com/api/";
const axios = require('axios');

// Saves the balances to localStorage
export function saveBalances(balance) {
    localStorage.setItem(BALANCE_NAME, JSON.stringify(balance));
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

export function getTransactions(accessToken) {
    if (accessToken) {
        return axios.post(API_URL + "getTransactions",
            {"access_token": accessToken})
            .then(response => response.data);
    } else {
        return new Promise(() => null);
    }
}

export function saveTransactions(transactions) {
    localStorage.setItem(TRANSACTION_NAME, JSON.stringify(transactions)); // todo: look at the JSON and make sure this is correct
}

export function getSaveTransactions() {
    let transactions = JSON.stringify(localStorage.getItem(BALANCE_NAME));
    return { transactions }
}

// Gets the Link_Token from Plaid Servers
export function getLinkToken() {
    return axios.get(API_URL + "create_link_token")
        .then(response => response.data.link_token);
}

//Saves the Access_Token to localStorage
export function saveAccessToken(accessToken) {
    localStorage.setItem(ACCESS_TOKEN_NAME, JSON.stringify(accessToken))
}
