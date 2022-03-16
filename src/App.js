import './App.css';
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { usePlaidLink } from 'react-plaid-link';
const axios = require('axios');

function getBalances() {
    let balance = JSON.stringify(localStorage.getItem('Account-Balances'));
    return { balance }
}

function format_balance_for_table(balance) {
    if(balance) {
        localStorage.setItem('Account-Balances', JSON.stringify(balance.Balance.accounts)); // This saves a JSON file to local storage
        return balance.Balance.accounts.map(acct => ({name: acct.name, type: acct.type, balance: acct.balances.current}));
    } else {
        return null;
    }
}

function App() {

    const [linkToken, setLinkToken] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        axios.get("https://birdboombox.com/api/create_link_token")
            .then(response => { console.log(response); setLinkToken(response.data.link_token)});
    }, []);

    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: (public_token, metadata) => {
            axios.post("https://birdboombox.com/api/exchange_public_token",
                {"public_token": public_token})
            .then(response => { setAccessToken(response.data.access_token) });
        },
    });

    const [balance, setBalance] = useState(null);
    useEffect(() => {
        if(accessToken) {
            axios.post("https://birdboombox.com/api/getBalance",
                {"access_token": accessToken})
            .then(response => { setBalance(format_balance_for_table(response.data)) });
        }
    }, [accessToken]);

    return (
        <>
          <Button variant="primary" onClick={() => open()}>Click me</Button>
          {balance ? (
          <Table striped border hover>
            <thead>
              <th>Name</th><th>Type</th><th>Balance</th>
            </thead>
            <tbody>
              {balance.map(b => (
                  <tr><td>{b.name}</td><td>{b.type}</td><td>{b.balance}</td></tr>
               ))}
            </tbody>
          </Table>
          ) : null}
        </>
    );
}

export default App;
