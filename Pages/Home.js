import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import {
  BarChart,
  PieChart
} from "react-native-chart-kit";
import "bootswatch/dist/yeti/bootstrap.min.css";
import React from 'react';
import Transactions_table from "./transactions_table";
import Pie_graphs from './pie_graph';
export default class Home extends React.Component {
    render(){
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
                  <a class="nav-link active" href="#">Home
                    <span class="visually-hidden">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                <TouchableOpacity 
                onPress={() =>
              this.props.navigation.navigate({ name: 'TransactionScreen'})}
            style={styles.TouchableOpacity}>
                  <a class="nav-link" href="#">Transaction</a>
                  </TouchableOpacity>
                </li>
                
                <li class="nav-item">
                <TouchableOpacity 
                onPress={() =>
              this.props.navigation.navigate({ name: 'GraphScreen'})}
            style={styles.TouchableOpacity}>
                  <a class="nav-link" href="#">Graphs</a>
                  </TouchableOpacity>
                  
                </li>
                <li class="nav-item">
                <TouchableOpacity 
                onPress={() =>
              this.props.navigation.navigate({ name: 'BudgetScreen'})}
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
        <div class="card border-light mb-3" style={{ flexDirection: 'row' }}>
          <div class="card-body" style={{ width: 300, height: 300, paddingLeft: 40 }}>
            <h4 class="card-title" style={{ textAlign: 'center' }}>Total Budget</h4>
            <h1 class="card-text" style={{ textAlign: 'center', fontWeight: 'bold' }}>$1000</h1>
            <h4 class="card-title" style={{ textAlign: 'center' }}> Budget Remaining</h4>
            <h1 class="card-text" style={{ textAlign: 'center', fontWeight: 'bold' }}>$400</h1>
          </div>
  
          <Pie_graphs/>
        </div>
        <div class="card text-white bg-primary mb-3" style={{paddingTop:10, paddingBottom: 10}}>
          <h4 style={{ fontWeight: 'bold' }}>Transactions:</h4>
        </div>
      {/* todo: add transactions table here*/}
        <Transactions_table/>
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
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(97, 97, 97, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: .75,
    useShadowColorFromDataset: false, // optional
  };
  
  