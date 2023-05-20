import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Calendar from "../screens/Calendar";
import Profile from "../screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import CategoryNavigator from "./CategoryNavigator";

const BottomNavigator = () => {
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
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.black,
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
            <Ionicons name="search-sharp" color={color} size={25} />
          ),
          headerShown: false,
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
      <Bottom.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" color={color} size={25} />
          ),
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={25} />
          ),
          headerTitle: "Profile",
          headerTitleStyle: styles.headerTitleStyle
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 65,
    position: "absolute",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logoHeaderTitleStyle:{
    fontFamily: "titleFont",
    fontSize: 35,
    color: colors.primary
  },
  headerTitleStyle: {
    color: colors.primary,
    fontFamily: "leagueSpartanBold",
    fontSize: 25,
  },
  headerStyle: {
    backgroundColor: colors.secondary,
  },
});
