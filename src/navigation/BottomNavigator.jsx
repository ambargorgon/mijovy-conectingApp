import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import CalendarScreen from "../screens/Calendar";
import Profile from "../screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/Colors";
import CategoryNavigator from "./CategoryNavigator";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomNavigator = () => {

  const navigation = useNavigation()
  const Bottom = createBottomTabNavigator();

  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: "MIJOVY",
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.logoHeaderTitleStyle,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.black,
      }}
    >
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={25} />
          ),
        }}
      />
      <Bottom.Screen
        name="Search"
        component={CategoryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-sharp" color={color} size={25} onPress={navigation.navigate("Search")}/>
          ),
          headerShown: false,
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Bottom.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title:"Calendario",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" color={color} size={25} />
          ),
          headerTitle: "Calendario",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={25} />
          ),
          headerTitle: "Perfil",
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.white,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 65,
    position: "absolute",
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logoHeaderTitleStyle:{
    fontFamily: "titleFont",
    fontSize: 35,
    color: Colors.primary
  },
  headerTitleStyle: {
    color: Colors.primary,
    fontFamily: "leagueSpartanBold",
    fontSize: 25,
  },
  headerStyle: {
    backgroundColor: Colors.secondary,
  },
});
