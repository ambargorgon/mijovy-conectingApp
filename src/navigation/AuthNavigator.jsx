import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import LogIn from "../screens/Auth/LogIn";
import SignIn from "../screens/Auth";

const Stack = createNativeStackNavigator();
export default AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        headerTitleStyle:{color: Colors.primary}
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="LogIn" component={LogIn} />
    </Stack.Navigator>
  );
};
