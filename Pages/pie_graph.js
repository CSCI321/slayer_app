import {StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import "bootswatch/dist/yeti/bootstrap.min.css";
import React, {useEffect, useState} from 'react';
import {getAccessToken, getSavedTransactions, getTransactions, saveBalances, saveTransactions} from "../Data";
import alert from "react-native-web/dist/exports/Alert";
import temp_transactions from '../temp_transactions.json'
import {
    BarChart,
    PieChart
} from "react-native-chart-kit";

function Pie_graphs() {
    const [transactions, setTransactions] = useState([{}]);

    const getTransactionsFunction = () => {
        getTransactions();
        let data = getSavedTransactions();

        setTransactions(data);

        console.log('Hook Value:', transactions);
    };

    let foodAmount =0;
    let getCategory = transactions.map(
        (info) => {
            let temp = info.category;
            console.log('category:');
        }
    );

    const data = [
        {
            name: "Food and Drink",
            amount: 300,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 10
        },
        {
            name: "Entertainment",
            population: 100,
            color: "yellow",
            legendFontColor: "#7F7F7F",
            legendFontSize: 10
        },
        {
            name: "Travel",
            amount: 400,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 10
        },
        {
            name: "Bills",
            amount: 1000,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 10
        },
        {
            name: "Other",
            amount: 120,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 10
        }
    ]


    return (
        <View style={styles.whiteBackground}>
            <Button title={"Refresh"} onPress={() => {
                getTransactionsFunction();
                console.log('Refresh');
            }}>
                Refresh
            </Button>{' '}
            <PieChart
                    data={data}
                    width={screenWidth}
                    height={300}
                    chartConfig={chartConfig}
                    accessor={"amount"}
                    backgroundColor={"transparent"}
                />
        </View>
    );
}
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#C4C4C4",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: .75,
    useShadowColorFromDataset: false, // optional
};
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
export default Pie_graphs;