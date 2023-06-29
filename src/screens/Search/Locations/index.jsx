import { View} from 'react-native'
import React, { useState } from 'react'
import LocationSelector from "../../../components/LocationSelector"


const Locations = () => {
  const [location, setLocation] =useState();
  return (
    <View>
      <LocationSelector onLocation={setLocation}/>
    </View>
  )
}

export default Locations