import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Calendar from '../screens/Calendar'
import Profile from '../screens/Profile'

const Navigator = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='Calendar' component={Calendar}/>
        <Stack.Screen name='Profile' component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator