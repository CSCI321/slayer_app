import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native';

import "bootswatch/dist/yeti/bootstrap.min.css";
import React from 'react';

export default class Transaction extends React.Component {
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
                  <a class="nav-link" href="#">Transaction
                  <span class="visually-hidden">(current)</span>
                  </a>
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

  