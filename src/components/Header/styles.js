//HEADER
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
      height: '10%',
      width: '100%',
      paddingTop: 20,
      backgroundColor: colors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: "80%",
      objectFit: 'contain',
    },
    text: {
      color: colors.primary,
      fontFamily: "titleFont",
      alignSelf: 'center',
      fontSize: 50,
      textShadowColor: colors.white,
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 1,
    }
  });

  export default styles