import { View, Text, Image} from 'react-native'
import React from 'react'

const Detail = ({route}) => {

  return (
    <View>
      <Text>{route.params.name}</Text>
      <Image source={{uri: route.params.image}}/>
    </View>
  )
}

export default Detail