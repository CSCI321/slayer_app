import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native';

import "bootswatch/dist/yeti/bootstrap.min.css";
import React, {useEffect, useState} from 'react';
import {getAccessToken, getSaveTransactions, getTransactions, saveBalances, saveTransactions} from "../Data";
const transaction_json = require('../temp_transactions.json');
const temp_transaction = JSON.stringify(transaction_json);

export default function Transactions_table(props: Props) {
    const [transactions, setTransactions] = useState(getSaveTransactions);

    function refreshTransactions() {
        console.log('plaid');
        const accessToken = getAccessToken();
        console.log(accessToken);

        if (accessToken) {
            getTransactions(accessToken)
                .then(t => {
                    setTransactions(t);
                    console.log(t);
                    saveTransactions(t);
                });
        }
    }

    return (
        <View style={styles.whiteBackground}>
            <div class={"m-3"}>
                <Button variant="primary" onClick={refreshTransactions}>Refresh Transactions</Button>
            </div>
            <table class="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Transaction Name:</th>
                    <th scope="col">Amount</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Default</th>
                    <td>Column content</td>
                </tr>
                <tr>
                    <th scope="row">Default</th>
                    <td>Column content</td>
                </tr>
                <tr>
                    <th scope="row">Default</th>
                    <td>Column content</td>
                </tr>
                <tr>
                    <th scope="row">Default</th>
                    <td>Column content</td>
                </tr>
                <tr>
                    <th scope="row">Default</th>
                    <td>Column content</td>
                </tr>
                </tbody>
            </table>
        </View>
    );
}



const styles = StyleSheet.create({
    homeBudget: {
        width: 300,
        height: 300,
        paddingLeft: 40
    },
    whiteBackground: {
        backgroundColor: "white"
    }
});