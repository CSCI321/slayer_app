import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
  BarChart,
  PieChart
} from "react-native-chart-kit";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
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
    <View style={styles.screen}>
      <View style={styles.topLeftScrn}>
        <Text style={styles.Text}>Welcome, "Name"</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.topRightScrn}>
        <Image style={styles.ProfileImage} source={require('./logos/5.png')}>
        </Image>
      </View>
      <View style={styles.middleScrnHome}>
        <ScrollView style={styles.scrollView}>
          <Text>Home Screen Stuff</Text>
        </ScrollView>
      </View>
      <View style={styles.bottomScrnBoxes}>
        <TouchableOpacity>
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
  screen: {
    flexDirection: 'row',
    flexWrap: "wrap",
    height: '100%',
  },
  topScrn: {
    paddingTop: 50,
    width: '100%',
    height: '10%',
    backgroundColor: '#33d651',
  },
  topLeftScrn: {
    paddingTop: 50,
    width: '75%',
    height: '15.5%',
    backgroundColor: '#33d651',
  },
  topRightScrn: {
    paddingTop: 50,
    height: '15.5%',
    width: '25%',
    backgroundColor: '#33d651',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  middleScrnHome: {
    width: "100%",
    height: "74%",
    borderWidth: 1,
    borderColor: "green",
  },
  middleScrn: {
    width: "100%",
    height: "79%",
    borderWidth: 1,
    borderColor: "green",
  },
  bottomScrnBoxes: {
    width: '25%',
    height: '15%',
    borderWidth: 1,
    borderColor: "green",
  },
  Text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
  },
  Imagesource: {
    height: 100,
    width: 102,
    resizeMode: 'stretch',
  },
  ProfileImage: {
    height: 90,
    width: 102,
    resizeMode: 'stretch',
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
  useShadowColorFromDataset: false // optional
};

const BarData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      data: [20, 45, 28, 80]
    }
  ]
};
