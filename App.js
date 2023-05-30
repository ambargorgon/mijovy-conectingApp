import { useFonts } from "expo-font";
import BottomNavigator from "./src/navigation/BottomNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store";
import Login from "./src/screens/Login"

export default function App() {
  const [loaded] = useFonts({
    titleFont: require("./src/assets/fonts/JMHPsychedelicCAPS.ttf"),
    leagueSpartanBold: require("./src/assets/fonts/LeagueSpartan-Bold.ttf"),
    leagueSpartan: require("./src/assets/fonts/LeagueSpartan-Regular.ttf"),
    leagueSpartanSemiBold: require("./src/assets/fonts/LeagueSpartan-SemiBold.ttf"),
  });

  if (!loaded) return;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
    // <Login/>
  );
}
