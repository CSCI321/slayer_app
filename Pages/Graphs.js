import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import {
    BarChart,
    PieChart
} from "react-native-chart-kit";
import "bootswatch/dist/yeti/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';

export default class Graphs extends React.Component {
    render() {
        return (
            <View style={styles.whiteBackground}>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Refinance</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarColor01">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.props.navigation.navigate({ name: 'HomeScreen' })}
                                        style={styles.TouchableOpacity}>
                                        <a class="nav-link" href="#">Home</a>
                                    </TouchableOpacity>
                                </li>
                                <li class="nav-item">
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.props.navigation.navigate({ name: 'TransactionScreen' })}
                                        style={styles.TouchableOpacity}>
                                        <a class="nav-link" href="#">Transaction</a>
                                    </TouchableOpacity>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Graphs
                                        <span class="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.props.navigation.navigate({ name: 'BudgetScreen' })}
                                        style={styles.TouchableOpacity}>
                                        <a class="nav-link" href="#">Budget: What if</a>
                                    </TouchableOpacity>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <button type="button" class="btn btn-primary">Profile</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <PieChart
                    data={PieData}
                    width={screenWidth}
                    height={300}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                /><VictoryChart
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
const screenWidth = Dimensions.get("window").width;
const PieData = [
    {
        name: "Groceries",
        population: 300,
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
        name: "Transport",
        population: 400,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
    },
    {
        name: "House Bills",
        population: 1000,
        color: "green",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
    },
    {
        name: "Other",
        population: 120,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
    }
];

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