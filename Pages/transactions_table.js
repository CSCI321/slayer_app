import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native';

import "bootswatch/dist/yeti/bootstrap.min.css";
import React, {useEffect, useState} from 'react';
import {getAccessToken, getSaveTransactions, getTransactions, saveBalances, saveTransactions} from "../Data";
import alert from "react-native-web/dist/exports/Alert";
import temp_transactions from '../temp_transactions.json'

export default function Transactions_table(props: Props) {
    const [transactions, setTransactions] = useState(getSaveTransactions);

    const refreshTransactions = () => {
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

    const test = () => {
        console.log('this is a test');
        alert('this is a test');
    }


    const DisplayData = temp_transactions.map(
        (info) => {
            return(
                <tr>
                    <td>{info.name}</td>
                    <td>{info.date}</td>
                    <td>{info.amount}</td>
                </tr>
            )
        }
    );


    return (
        <View style={styles.whiteBackground}>
                <Button variant="primary" size="lg" active onClick={() => test()}>
                    Primary button
                </Button>{' '}
            <table class="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Transaction Name:</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                </tr>
                </thead>
                <tbody>
                    {DisplayData}
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