//HEADER
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
      height: '10%',
      width: '100%',
      padding: 20,
      paddingBottom: 1, 
      backgroundColor: Colors.secondary,
      justifyContent: "flex-end",
      alignItems: 'flex-start',
    },
    text: {
      color: Colors.primary,
      fontFamily: "titleFont",
      fontSize: 40,
      textShadowColor: Colors.white,
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 1,
    }
  });

  export default styles