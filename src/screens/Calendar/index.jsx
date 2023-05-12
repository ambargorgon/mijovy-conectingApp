import { View, Button , Text} from 'react-native'
import React from 'react'
import styles from './style'

const Calendar = ({navigation}) => {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Calendar</Text>
      <Button title="Navegar a Profile" onPress={()=> navigation.navigate("Profile")}/>
    </View>
  )
}

export default Calendar