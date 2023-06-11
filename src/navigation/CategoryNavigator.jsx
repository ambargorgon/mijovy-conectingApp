import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import Activities from "../screens/Search/Activities";
import Colors from "../constants/Colors";
import Detail from "../screens/Search/Detail";
import Inscripcion from "../screens/Search/Inscripcion";
import Locations from "../screens/Search/Locations";

const CategoryNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.secondary },
        headerTitleStyle: { color: Colors.primary, fontFamily: "leagueSpartanBold" , fontSize: 25, },
      }}
    >
      <Stack.Screen name="Categories" component={Search}/>
      <Stack.Screen name="Mapa" component={Locations}/>
      <Stack.Screen name="Activities" component={Activities}  options={({route})=>(
        {  title: route.params.name} 
        ) }/>
      <Stack.Screen name="Detail" component={Detail}  options={({route})=>(
        {  title: route.params.name} 
        ) }/>
      <Stack.Screen name="Inscription" component={Inscripcion}  options={({route})=>(
        {  title: route.params.name} 
        ) }/>
    </Stack.Navigator>
  );
};

export default CategoryNavigator;
