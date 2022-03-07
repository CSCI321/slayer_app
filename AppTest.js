import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionChart,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
export default function App() {
  return (
    <View>
<PieChart
  data={data}
  width={screenWidth}
  height={300}
  chartConfig={chartConfig}
  accessor={"population"}
  backgroundColor={"transparent"}
  paddingLeft={"15"}
  center={[10, 50]}
  absolute
/>
    </View>
      );
}

  const styles = StyleSheet.create({
    screen: {
      flexDirection:'row',
      flexWrap: "wrap",
      height:'100%',
  },
    topLeftScrn: {
      backgroundColor: '#fff',
      marginTop: 50,
      borderWidth: 1,
      width: '75%',
      height: '15%',
  },
    topRightScrn: {
      marginTop: 50,
      borderWidth: 1,
      height: '15%',
      width: '25%',
  },
  middleScrn:{
    width:'100%',
    height: "65%",
    borderWidth:1,
  },
  bottomScrnBoxes:{
    width:'25%',
    height:'25%',
    borderWidth:1,
  },
    Text: {
        color: '#888',
      fontSize: 24,
  },
  
});

const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
