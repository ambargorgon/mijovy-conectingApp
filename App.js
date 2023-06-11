import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/store";
import Navigator from "./src/navigation";

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
        <Navigator />
    </Provider>
  );
}
