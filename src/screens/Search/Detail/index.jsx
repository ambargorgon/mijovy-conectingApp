import { View, Text, Image} from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet } from "react-native";
const Detail = () => {

    const product = useSelector((state)=> state.activities.selected)

  return (
    <View>
      <Image style={styles.image} source={{uri: product.image}}/>
      <Text>{product.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    image:{
      borderRadius: 20,
      width: "100%",
      height: "60%"
  },
  }
)

export default Detail