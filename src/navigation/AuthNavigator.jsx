import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();
export default AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerStyle: { backgroundColor: Colors.secondary },
        headerTitleStyle: { color: Colors.primary, fontFamily: "leagueSpartanBold" , fontSize: 25, },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
