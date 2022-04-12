import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Image, View, SafeAreaView } from 'react-native';

export default function App() {
  console.log('App executed');
  return (
    <SafeAreaView style={styles.container}>
      <Text>SURGE FINANCE</Text>
  
      < Image
        source={require('./assets/moneyview.png')}
        style={styles.img}
      />
      <View style={styles.backshape} />
      
      <Text style={styles.headerText} numberOfLines={2}>
        Easiest Way to Manage Your Money
      </Text>

      <Text style={styles.bodyText} numberOfLines={2}>
        All financial transactions in one application. 
          With complete security guaranteed. 
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74C365',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200, 
    position: 'absolute',
    top: 200,
  },
  backshape: {
    position: 'absolute',
    bottom: -5,
    width: 390,
    height: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },
  headerText: {

  },
  bodyText: {
    padding: 40,
    alignContent: 'center',
    position: 'absolute', 
    bottom: 150, 

  }

});

