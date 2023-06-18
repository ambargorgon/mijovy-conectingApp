import * as React from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import MyActivities from "../screens/Profile/MyActivities"
import Information from "../screens/Profile/Information"
import { Colors } from "react-native/Libraries/NewAppScreen"
const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
return (
    <Tab.Navigator
        initialRouteName="Information"
        screenOptions={{
            activeTintColor: Colors.primary,
            labelStyle: {fontSize: 12},
            style: {backgroundColor: "white"},
            swipeEnabled: true,
            animationEnabled: true,
           
        }}
        
    >
        <Tab.Screen 
            name="Information"
            component={Information}
            options={{tabBarLabel: 'Informacion'}}
        />
        <Tab.Screen 
            name="MyActivites"
            component={MyActivities}
            options={{tabBarLabel: 'Actividades'}}
        />

    </Tab.Navigator>
)

}

export default MyTabs