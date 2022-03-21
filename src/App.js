import './App.css';
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { saveBalances, getBalances } from "./Data";
const axios = require('axios');


function format_balance_for_table(balance) {
    if(balance) {
        saveBalances(balance);
        return balance.Balance.accounts.map(acct => ({name: acct.name, type: acct.type, balance: acct.balances.current}));
    } else {
        return null;
    }
}

function App() {

    const [balance, setBalance] = useState(null);

    function getBalancesPlaid() {
        setBalance(getBalances());
    }

    return (
        <>
          <Button variant="primary" onClick={() => getBalancesPlaid()}>Click me</Button>
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
