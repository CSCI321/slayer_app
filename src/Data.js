import {useState} from "react";
import { usePlaidLink } from 'react-plaid-link';


let balanceName = 'Balances';
const axios = require('axios');

// Saves the balances to localStorage
export function saveBalances(balance) {
    localStorage.setItem(balanceName, JSON.stringify(balance.Balance.accounts));
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
    let balance = JSON.stringify(localStorage.getItem(balanceName));
    return { balance }
}

// Gets the Link_Token from Plaid Servers
export function getLinkToken() {
    return axios.get("https://birdboombox.com/api/create_link_token");
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
    localStorage.setItem('Access Token', JSON.stringify(getAccessToken()))
}

