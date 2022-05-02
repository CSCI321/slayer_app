import {StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import "bootswatch/dist/yeti/bootstrap.min.css";
import React, {useEffect, useState} from 'react';
import {getAccessToken, getSavedTransactions, getTransactions, saveBalances, saveTransactions} from "../Data";
import alert from "react-native-web/dist/exports/Alert";
import temp_transactions from '../temp_transactions.json'


function Transactions_table() {
    const [transactions, setTransactions] = useState([]);

    const getTransactionsFunction = () => {
        const accessToken = getAccessToken();
        console.log(accessToken);

        setTransactions(getTransactions);
    };


    const DisplayData = temp_transactions.map(function (element) {
            return (
                <tr>
                    <td>{temp_transactions.name}</td>
                    <td>{temp_transactions.date}</td>
                    <td>{'$' + temp_transactions.amount}</td>
                </tr>
            )
        }
    );
    return (
        <View style={styles.whiteBackground}>
            <Button title={"Refresh"} onPress={() => {
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