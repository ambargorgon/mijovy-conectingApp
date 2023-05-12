import { StyleSheet, SafeView } from "react-native";
// import Header from "./src/components/Header";
import colors from "./src/constants/colors";
import { useFonts } from "expo-font";
// import Home from "./src/screens/Home";
import Navigator from "./src/navigation/Navigator";


export default function App() {
  // const [loaded] = useFonts({
  //   titleFont: require("./src/assets/fonts/JMHPsychedelicCAPS.ttf"),
  // });

  // if (!loaded) return;

  return (
    <Navigator />
    // <SafeView style={styles.container}>
    //   <Header newStyles={styles.text} />
    //   <Home />
    // </SafeView> 
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.primary,
//     alignItems: "center",
//     gap: 10,
//     justifyContent: "flex-start",
//   },
//   text: {
//     fontFamily: "titleFont",
//   },
// });
