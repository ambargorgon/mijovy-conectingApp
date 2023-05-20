import { SafeAreaView,  Text} from 'react-native'
import React from 'react'
import styles  from './styles'
import { useFonts } from "expo-font";


const Header = ({ newStyles}) => {
  const [loaded] = useFonts({
    titleFont: require("../../assets/fonts/JMHPsychedelicCAPS.ttf"),
  });

  if (!loaded) return;

  return (
    <SafeAreaView style={{...styles.container, ...newStyles}}>
      <Text style={{...styles.text, ...newStyles}}>MIJOVY</Text>
    </SafeAreaView>
  )
}

export default Header