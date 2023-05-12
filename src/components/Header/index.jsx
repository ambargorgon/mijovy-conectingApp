import { View,  Text} from 'react-native'
import React from 'react'
import styles  from './styles'
import { useFonts } from "expo-font";


const Header = ({ newStyles}) => {
  const [loaded] = useFonts({
    titleFont: require("../../assets/fonts/JMHPsychedelicCAPS.ttf"),
  });

  if (!loaded) return;

  return (
    <View style={{...styles.container, ...newStyles}}>
      {/* <Image style={styles.image} source={require("../../assets/logo-name.png")}/> */}
      <Text style={{...styles.text, ...newStyles}}>MIJOVY</Text>
    </View>
  )
}

export default Header