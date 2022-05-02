import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import "bootswatch/dist/yeti/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import Transactions_table from "./transactions_table";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';

export default class Budget extends React.Component {
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
                <TouchableOpacity 
                onPress={() =>
              this.props.navigation.navigate({ name: 'HomeScreen'})}
            style={styles.TouchableOpacity}>
                  <a class="nav-link" href="#">Home</a>
                  </TouchableOpacity>
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
                  <a class="nav-link" href="#">Budget: What if
                  <span class="visually-hidden">(current)</span>
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <button type="button" class="btn btn-primary">Profile</button>
              </form>
            </div>
          </div>
        </nav>

        <div>
         <h1>Budget</h1> 
          <View style={{
            height: 50, width: 100, marginTop: 15,
            gap:4, flexDirection: "row", alignContent: 'center'
          }}>
            <TouchableOpacity>
            <Button title="Edit Budget" />
            </TouchableOpacity>

            <TouchableOpacity>
            <Button title="What-if"/>  
            </TouchableOpacity>
          </View>
    
          <View style={{
            height: 350, width: 500,
            alignContent: 'center', gap: 5,
            padding: 30
          }}>
            <h1>This Week's Spending: </h1>
            <VictoryChart
              domainPadding={40}
            >

            <VictoryAxis
              label={"Day"}  
              tickValues={[1, 2, 3, 4, 5, 6, 7]}
              tickFormat={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]} />
              
            <VictoryAxis
              dependentAxis
              tickFormat={(y) => (`$${y / 1000}`)}  
            />

          {/* data from plaid will get passed through here */}
              <VictoryBar style={{ data: { fill: 'blue'} }}
                animate data={data} x="day" y="expenses" />
          </VictoryChart>
           
            
          </View>  

          
        </div>
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
    },
    button: {
     height: 50, 
     width: 50, 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 50,
     elevation:3,
    },
  });
const screenWidth = Dimensions.get("window").width;

const data = [
  {day: 1, expenses: 130000},
  {day: 2, expenses: 105000},
  {day: 3, expenses: 72000},
  {day: 4, expenses: 190000},
  {day: 5, expenses: 165000},
  {day: 6, expenses: 142000},
  {day: 7, expenses: 190000}
];