import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native';

import "bootswatch/dist/yeti/bootstrap.min.css";
import React, {useEffect, useState} from 'react';
import {getAccessToken, getTransactions, saveBalances, saveTransactions} from "../Data";

function plaid() {
    console.log('Plaid Thing Starting');
    const [accessToken, setAccessToken] = useState(getAccessToken);
    const [transactions, setTransactions] = useState(null);


    useEffect( () => {
        if (accessToken) {
            getTransactions(accessToken)
                .then(t => {
                    setTransactions(t);
                    saveTransactions(t);
                });
        }
    }, [accessToken]);
}

export default class Transactions_table extends React.Component {
    render() {
        return (
            <View style={styles.whiteBackground}>
                <div class={"m-3"}>
                    <Button variant="primary" onClick={plaid}>Refresh Transactions</Button>{' '}
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
        )
    }
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