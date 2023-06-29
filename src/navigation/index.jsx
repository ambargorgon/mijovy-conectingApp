import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./BottomNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import auth from "@react-native-firebase/auth"

const Navigator = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const userId = useSelector(state => state.auth.userId);
  

  useEffect(() => {
    console.log("Log?", loggedIn)
    getUserState()
  }, [])

  const getUserState = () => {

    if (auth().currentUser) {
      console.log("currentUser", auth().currentUser)
      setLoggedIn(true)
    }
    auth().onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
  }

  

  return (
    <NavigationContainer>
      {loggedIn || userId ? <BottomNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
};

export default Navigator;

const styles = StyleSheet.create({});
