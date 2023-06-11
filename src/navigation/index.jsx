import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./BottomNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux"

const Navigator = () => {
  const userId = useSelector(state => state.auth.userId);

  return (
    <NavigationContainer>
        {!userId ? <BottomNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
  )
};

export default Navigator;

const styles = StyleSheet.create({});
