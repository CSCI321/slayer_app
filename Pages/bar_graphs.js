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
    let janAmount = 0;
    let febAmount = 0;
    let marAmount = 0;
    let aprAmount = 0;
    let mayAmount = 0;
    let junAmount = 0;
    let julAmount = 0;
    let augAmount = 0;
    let sepAmount = 0;
    let octAmount = 0;
    let novAmount = 0;
    let decAmount = 0;
    const getDate = transactions.map(
        (info) => {
            let date = info.date;
            let amount = info.amount;
            console.log('Amount', amount);

            try {
                if (date.includes("-01-")) {
                    janAmount = janAmount + amount;
                }
                if (String(date.includes("-02-"))) {
                    febAmount = febAmount + amount;
                }
                if (String(date.includes("-03-"))) {
                    marAmount = marAmount + amount;
                }
                if (String(date.includes("-04-"))) {
                    aprAmount = aprAmount + amount;
                }
                if (String(date.includes("-05-"))) {
                    mayAmount = mayAmount + amount;
                }
                if (String(date.includes("-06-"))) {
                    junAmount = junAmount + amount;
                }
                if (String(date.includes("-07-"))) {
                    julAmount = julAmount + amount;
                }
                if (String(date.includes("-08-"))) {
                    augAmount = augAmount + amount;
                }
                if (String(date.includes("-09-"))) {
                    sepAmount = sepAmount + amount;
                }
                if (String(date.includes("-10-"))) {
                    octAmount = octAmount + amount;
                }
                if (String(date.includes("-11-"))) {
                    novAmount = novAmount + amount;
                }
                if (String(date.includes("-12-"))) {
                    decAmount = decAmount + amount;
                }
            } catch (e) {
                console.log(e);
            }
            console.log('Date:', date);
        }
        
    );
    console.log('January', janAmount);
    console.log('February', febAmount);
    console.log('March', marAmount);
    console.log('April', aprAmount);
    console.log('May', mayAmount);
    console.log('June', junAmount);
    console.log('July', julAmount);
    console.log('August', augAmount);
    console.log('September', sepAmount);
    console.log('October', octAmount);
    console.log('November', novAmount);
    console.log('December', decAmount);
    return (
        <View style={styles.whiteBackground}>
            <Button title={"Refresh"} onPress={() => {
                getTransactionsFunction();
                console.log('Refresh');
            }}>
                Refresh
            </Button>{' '}
            <View>
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
                        tickFormat={1}
                    />
                    <VictoryBar
    
                        barWidth={({ index }) => index * 2 + 30}
                        data={
                        [{ quarter: 1, earnings: Math.abs(janAmount) },
                        { quarter: 2, earnings: Math.abs(febAmount) },
                        { quarter: 3, earnings: Math.abs(marAmount) },
                        { quarter: 4, earnings: Math.abs(aprAmount) },
                        { quarter: 5, earnings: Math.abs(mayAmount) },
                        { quarter: 6, earnings: Math.abs(junAmount) },
                        { quarter: 7, earnings: Math.abs(julAmount) },
                        { quarter: 8, earnings: Math.abs(augAmount) },
                        { quarter: 9, earnings: Math.abs(sepAmount) },
                        { quarter: 10, earnings: Math.abs(octAmount) },
                        { quarter: 11, earnings: Math.abs(novAmount) },
                        { quarter: 12, earnings: Math.abs(decAmount) }]}
                        x="quarter"
                        y="earnings"
                    />
                </VictoryChart>
            </View>
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
    { quarter: 1, earnings:  0},
    { quarter: 2, earnings:  0},
    { quarter: 3, earnings:  0},
    { quarter: 4, earnings:  0},
    { quarter: 5, earnings:  0},
    { quarter: 6, earnings:  0},
    { quarter: 7, earnings:  0},
    { quarter: 8, earnings:  0},
    { quarter: 9, earnings:  0},
    { quarter: 10, earnings: 0},
    { quarter: 11, earnings: 0},
    { quarter: 12, earnings: 0},
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
function updateChart(){
    return(
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
        data={updatedata}
        x="quarter"
        y="earnings"
    />
</VictoryChart>
    )
}

export default Bar_graphs;