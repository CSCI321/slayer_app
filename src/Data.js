import {useState} from "react";
import { usePlaidLink } from 'react-plaid-link';

const BALANCE_NAME = 'Balances';
const ACCESS_TOKEN_NAME = 'Access Token';
const axios = require('axios');

// Saves the balances to localStorage
export function saveBalances(balance) {
    localStorage.setItem(BALANCE_NAME, JSON.stringify(balance.Balance.accounts));
}

// Gets the balances from Plaid Servers
export function getBalances() {
    const [balance, setBalance] = useState(null);
    const accessToken = getAccessToken();
    if(accessToken) {
        axios.post("https://birdboombox.com/api/getBalance",
            {"access_token": accessToken})
            .then(response => { setBalance(response.data) });
    }
    return balance;
}

// Gets the balances saved to localStorage
export function getSavedBalances() {
    let balance = JSON.stringify(localStorage.getItem(BALANCE_NAME));
    return { balance }
}

// Gets the Link_Token from Plaid Servers
export function getLinkToken() {
    const [linkToken, setLinkToken] = useState(null);
    axios.get("https://birdboombox.com/api/create_link_token")
        .then(response => setLinkToken(response.data.link_token));
    return linkToken;
}

// Gets the Access_Token from Plaid Servers
export function getAccessToken() {
    const [accessToken, setAccessToken] = useState(null);
    usePlaidLink({
        token: getLinkToken(),
        onSuccess: (public_token, metadata) => {
            axios.post("https://birdboombox.com/api/exchange_public_token",
                {"public_token": public_token})
                .then(response => { setAccessToken(response.data.access_token) });
        },
    });
    return accessToken;
}

//Saves the Access_Token to localStorage
function saveAccessToken() {
    localStorage.setItem(ACCESS_TOKEN_NAME, JSON.stringify(getAccessToken()))
}

