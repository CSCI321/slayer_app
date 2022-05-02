import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import "bootswatch/dist/yeti/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { getAccessToken, getSavedTransactions, getTransactions, saveBalances, saveTransactions } from "../Data";
import alert from "react-native-web/dist/exports/Alert";
import temp_transactions from '../temp_transactions.json'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

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
    var janAmount = 0;
    var febAmount = 0;
    var marAmount = 0;
    var aprAmount = 0;
    var mayAmount = 0;
    var junAmount = 0;
    var julAmount = 0;
    var augAmount = 0;
    var sepAmount = 0;
    var octAmount = 0;
    var novAmount = 0;
    var decAmount = 0;
    const getDate = transactions.map(
        (info) => {
            var temp = info.date;
            String(temp);

            /*        
            if(temp.includes("-01-")){
                           janAmount = janAmount + info.amount;
                       }
                       if(String(temp.includes("-02-"))){
                           febAmount = febAmount + info.amount;
                       }
                       if(String(temp.includes("-03-"))){
                           marAmount = marAmount + info.amount;
                       }
                       if(String(temp.includes("-04-"))){
                           aprAmount = aprAmount + info.amount;
                       }
                       if(String(temp.includes("-05-"))){
                           mayAmount = mayAmount + info.amount;
                       }
                       if(String(temp.includes("-06-"))){
                           junAmount = junAmount + info.amount;
                       }
                       if(String(temp.includes("-07-"))){
                           julAmount = julAmount + info.amount;
                       }
                       if(String(temp.includes("-08-"))){
                           augAmount = augAmount + info.amount;
                       }
                       if(String(temp.includes("-09-"))){
                           sepAmount = sepAmount + info.amount;
                       }
                       if(String(temp.includes("-10-"))){
                           octAmount = octAmount + info.amount;
                       }
                       if(String(temp.includes("-11-"))){
                           novAmount = novAmount + info.amount;
                       }
                       if(String(temp.includes("-12-"))){
                           decAmount = decAmount + info.amount;
                       }
                       */
            console.log(temp);
        }
    );
    console.log(janAmount);
    console.log(febAmount);
    console.log(marAmount);
    console.log(aprAmount);
    console.log(mayAmount);
    console.log(junAmount);
    console.log(julAmount);
    console.log(augAmount);
    console.log(sepAmount);
    console.log(octAmount);
    console.log(novAmount);
    console.log(decAmount);
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
                height={300}
                width={800}
            >
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                    tickFormat={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
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
    { quarter: 1, earnings: 500 },
    { quarter: 2, earnings: 600 },
    { quarter: 3, earnings: 250 },
    { quarter: 4, earnings: 130 },
    { quarter: 5, earnings: 100 },
    { quarter: 6, earnings: 900 },
    { quarter: 7, earnings: 120 },
    { quarter: 8, earnings: 800 },
    { quarter: 9, earnings: 500 },
    { quarter: 10, earnings: 300 },
    { quarter: 11, earnings: 200 },
    { quarter: 12, earnings: 1000 },
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