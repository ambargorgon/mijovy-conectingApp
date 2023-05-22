import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import Activities from "../screens/Search/Activities";
import colors from "../constants/colors";
import Detail from "../screens/Search/Detail";

const CategoryNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.secondary },
        headerTitleStyle: { color: colors.primary, fontFamily: "leagueSpartanBold" , fontSize: 25, },
      }}
    >
      <Stack.Screen name="Categories" component={Search}/>
      <Stack.Screen name="Activities" component={Activities}  options={({route})=>(
        {  title: route.params.name} 
        ) }/>
      <Stack.Screen name="Detail" component={Detail}  options={({route})=>(
        {  title: route.params.name} 
        ) }/>
    </Stack.Navigator>
  );
};

export default CategoryNavigator;
