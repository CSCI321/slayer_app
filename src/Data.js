let balanceName = 'Balances';

export function saveBalances(balance) {
    localStorage.setItem(balanceName, JSON.stringify(balance.Balance.accounts));
}

export function getBalances() {
    let balance = JSON.stringify(localStorage.getItem(balanceName));
    return { balance }
}