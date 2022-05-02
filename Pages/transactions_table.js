import {StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button} from 'react-native';

import "bootswatch/dist/yeti/bootstrap.min.css";
import React, {useEffect, useState} from 'react';
import {getAccessToken, getSaveTransactions, getTransactions, saveBalances, saveTransactions} from "../Data";
import alert from "react-native-web/dist/exports/Alert";
import temp_transactions from '../temp_transactions.json'

const axios = require('axios');
const startDate = '2022-01-01';
const endDate = '2022-12-10';


function Transactions_table() {
    const [transactions, setTransactions] = useState([]);



    const getTransactionsFunction = () => {
        const accessToken = 'access-sandbox-18edb14a-dfac-46bd-8cae-2e9db243520b';

        axios.post("https://birdboombox.com/api/getTransactions", {
            "access_token": getAccessToken(),
            "start_date": startDate,
            "end_date": endDate
        }).then(response => {
            let data = response.data
            setTransactions(data);
            saveTransactions(data);
            console.log(data);
        });
    };



    const DisplayData = transactions.map(function (element) {
            return (
                <tr>
                    <td>{transactions.name}</td>
                    <td>{transactions.date}</td>
                    <td>{'$' + transactions.amount}</td>
                </tr>
            )
        }
    );
    return (
        <View style={styles.whiteBackground}>
            <Button title={"Refresh"} onPress={ () => {
                getTransactionsFunction();
                console.log('Refresh');
            }}>
                Refresh
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

export default Transactions_table;

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