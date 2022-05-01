import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button, BackHandler, Alert } from 'react-native';
import {
  BarChart,
  PieChart
} from "react-native-chart-kit";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import {
    saveBalances,
    getBalances,
    getLinkToken,
    getTransactions,
    saveTransactions,
    getSavedBalances,
    getSaveTransactions, saveAccessToken
} from "./Data";
import "bootswatch/dist/yeti/bootstrap.min.css";
import Home from "./Pages/Home"
import Graphs from "./Pages/Graphs"
import Transaction from "./Pages/Transaction"
import Budget from "./Pages/Budget"



//handling back-button
const axios = require('axios');

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
          headerShown: false
        }}>
        <Stack.Screen name="LogScreen" component={Logscreen} />
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen
          name="GraphScreen"
          component={Graphs} />
        <Stack.Screen name="TransactionScreen" component={Transaction} />
        <Stack.Screen name="BudgetScreen" component={Budget} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Logscreen = ({ navigation }) => {
  const [linkToken, setLinkToken] = useState(null);
  useEffect(() => {
    getLinkToken().then(lt => setLinkToken(lt));
  }, [])
  const [accessToken, setAccessToken] = useState(null);
  const [balance, setBalance] = useState(null);
  const [transaction, setTransaction] = useState(null);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      axios.post("https://birdboombox.com/api/exchange_public_token",
        { "public_token": public_token })
        .then(response => setAccessToken(response.data.access_token));
    }
  });

  useEffect(() => {
    if (accessToken) {
      getBalances(accessToken)
          .then(b => {
            setBalance(b);
            console.log('Balance:', b);
            saveBalances(b);
          });
      // todo: do this when a button is clicked
      getTransactions(accessToken)
          .then(t => {
            setTransaction(t);
            console.log(t);
            // saveTransactions(t);
          });
      saveAccessToken(accessToken);
    }
  }, [accessToken]);

  return (
    <View>
      <View>
        <Button title="Login" onPress={() => {
          open();
          navigation.navigate('HomeScreen');
        }}>
        </Button>
      </View>
    </View>
  )
}
