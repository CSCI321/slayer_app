import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import {
  BarChart,
  PieChart
} from "react-native-chart-kit";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { saveBalances, getBalances, getLinkToken } from "./Data";
import "bootswatch/dist/yeti/bootstrap.min.css";

const axios = require('axios');

const Stack = createNativeStackNavigator();
export default function App() {
  /*
    ------------------------------- Start Plaid --------------------------------
           To call the Plaid API popup box make sure to use "open()" hook
                            in the return statement.
  */

  const [linkToken, setLinkToken] = useState(null);
  useEffect(() => {
    getLinkToken().then(lt => setLinkToken(lt));
  }, [])
  const [accessToken, setAccessToken] = useState(null);
  const [balance, setBalance] = useState(null);

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
      getBalances(accessToken).then(b => setBalance(b));
    }
  }, [accessToken]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
          headerShown: false
        }}>
        <Stack.Screen name="LogScreen" component={Logscreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="GraphScreen"
          component={GraphScreen} />
        <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
        <Stack.Screen name="BudgetScreen" component={BudgetScreen} />
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
      getBalances(accessToken).then(b => setBalance(b));
    }
  }, [accessToken]);
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => {
          open();
          navigation.navigate('HomeScreen');
        }}>
        </Button>
      </View>
    </View>
  )
}
const GraphScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.topScrn}>
        <Text style={styles.Text}>Graphs:</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.middleScrn}>
        <ScrollView style={styles.scrollView}>
          <PieChart
            data={PieData}
            width={screenWidth}
            height={250}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            absolute
          />
          <BarChart
            data={BarData}
            width={screenWidth - 20}
            height={250}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            fromZero
            showValuesOnTopOfBars
          />
        </ScrollView>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('HomeScreen')}
          style={styles.TouchableOpacity}>
          <Image style={styles.Imagesource} source={require('./logos/4.png')}>
          </Image>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TransactionScreen')}>
          <Image style={styles.Imagesource} source={require('./logos/1.png')}>
          </Image>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity>
          <Image style={styles.Imagesource} source={require('./logos/2.png')}>
          </Image>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('BudgetScreen')}>
          <Image style={styles.Imagesource} source={require('./logos/3.png')}>
          </Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const HomeScreen = ({ navigation }) => {
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
                <a class="nav-link" href="#">Transaction</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Graphs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Budget: What if</a>
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

        <PieChart
          data={PieData}
          width={screenWidth - 300}
          height={300}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
        />
      </div>
      <div class="card text-white bg-primary mb-3" style={{paddingTop:10, paddingBottom: 10}}>
        <h4 style={{ fontWeight: 'bold' }}>Transactions:</h4>
      </div>
      <View style={styles.whiteBackground}>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Transaction Name:</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Default</th>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">Default</th>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">Default</th>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">Default</th>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">Default</th>
              <td>Column content</td>
            </tr>
          </tbody>
        </table>
      </View>
    </View>
  )
}
const TransactionScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.topScrn}>
        <Text style={styles.Text}>Transactions:</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.middleScrn}>
        <ScrollView style={styles.scrollView}>
          <Text>Transaction Stuff</Text>
        </ScrollView>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('HomeScreen')}
          style={styles.TouchableOpacity}>
          <Image style={styles.Imagesource} source={require('./logos/4.png')}>
          </Image>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity>
          <Image style={styles.Imagesource} source={require('./logos/1.png')}>
          </Image>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('GraphScreen')}>
          <Image style={styles.Imagesource} source={require('./logos/2.png')}>
          </Image>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('BudgetScreen')}>
          <Image style={styles.Imagesource} source={require('./logos/3.png')}>
          </Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const BudgetScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.topScrn}>
        <Text style={styles.Text}>Budget "What if":</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.middleScrn}>
        <ScrollView style={styles.scrollView}>
          <Text>Budget Stuff</Text>
        </ScrollView>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('HomeScreen')}
          style={styles.TouchableOpacity}>
          <Image style={styles.Imagesource} source={require('./logos/4.png')}>
          </Image>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TransactionScreen')}>
          <Image style={styles.Imagesource} source={require('./logos/1.png')}>
          </Image>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('GraphScreen')}>
          <Image style={styles.Imagesource} source={require('./logos/2.png')}>
          </Image>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity>
          <Image style={styles.Imagesource} source={require('./logos/3.png')}>
          </Image>
        </TouchableOpacity>
      </View>
    </View>
  )
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


const screenWidth = Dimensions.get("window").width;

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

const BarData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      data: [20, 45, 28, 80]
    }
  ]
};
