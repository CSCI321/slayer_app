import {StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import "bootswatch/dist/yeti/bootstrap.min.css";
import React, {useEffect, useState} from 'react';
import {getAccessToken, getSavedTransactions, getTransactions, saveBalances, saveTransactions} from "../Data";
import alert from "react-native-web/dist/exports/Alert";
import temp_transactions from '../temp_transactions.json'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';

function Bar_graphs() {
    const [transactions, setTransactions] = useState([{}]);

    const getTransactionsFunction = () => {
        getTransactions();
        let data = getSavedTransactions();

        setTransactions(data);
        // try {
        //     data.map();
        //     console.log('Passed Map');
        // } catch (e) {
        //     console.log('Failed Map');
        //     setTransactions([{}]);
        // }
        console.log('Hook Value:', transactions);
    };
    var getDate = transactions.map(
        (info) => {
            
            console.log(temp);
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
            <VictoryChart
                // domainPadding will add space to each side of VictoryBar to
                // prevent it from overlapping the axis
                theme={VictoryTheme.material}
                domainPadding={20}
                height ={300}
                width ={800}
              >
                <VictoryAxis
                  // tickValues specifies both the number of ticks and where
                  // they are placed on the axis
                  tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                  tickFormat={["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"]}
                />
                <VictoryAxis
                  dependentAxis
                  // tickFormat specifies how ticks should be displayed
                  tickFormat={(x) => (`$${x / 10}`)}
                />
                <VictoryBar
                
                barWidth={({ index }) => index * 2 + 30}
                  data={data}
                  x="quarter"
                  y="earnings"
                />
              </VictoryChart>
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
const data = [
    {quarter: 1, earnings: 500},
    {quarter: 2, earnings: 600},
    {quarter: 3, earnings: 250},
    {quarter: 4, earnings: 130},
    {quarter: 5, earnings: 100},
    {quarter: 6, earnings: 900},
    {quarter: 7, earnings: 120},
    {quarter: 8, earnings: 800},
    {quarter: 9, earnings: 500},
    {quarter: 10, earnings: 300},
    {quarter: 11, earnings: 200},
    {quarter: 12, earnings: 1000},
  ];
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
export default Bar_graphs;