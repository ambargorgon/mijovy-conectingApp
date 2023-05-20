import { useFonts } from "expo-font";
import BottomNavigator from "./src/navigation/BottomNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [loaded] = useFonts({
    titleFont: require("./src/assets/fonts/JMHPsychedelicCAPS.ttf"),
    leagueSpartanBold: require("./src/assets/fonts/LeagueSpartan-Bold.ttf"),
    leagueSpartan: require("./src/assets/fonts/LeagueSpartan-Regular.ttf"),
    leagueSpartanSemiBold: require("./src/assets/fonts/LeagueSpartan-SemiBold.ttf"),
  });

  if (!loaded) return;

  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}
