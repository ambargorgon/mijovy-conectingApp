//HEADER
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
      height: '10%',
      width: '100%',
      padding: 20,
      paddingBottom: 1, 
      backgroundColor: colors.secondary,
      justifyContent: "flex-end",
      alignItems: 'flex-start',
    },
    text: {
      color: colors.primary,
      fontFamily: "titleFont",
      fontSize: 40,
      textShadowColor: colors.white,
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 1,
    }
  });

  export default styles