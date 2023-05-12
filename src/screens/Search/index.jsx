import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from './style'

const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
      <Button title='Navegar a Calendar' onPress={()=> navigation.navigate("Calendar")}/>
    </View>
  )
}

export default Search