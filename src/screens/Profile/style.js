// PROFILE
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center'
    },
    text:{
        color: colors.white,
        fontFamily: 'titleFont',
        fontSize: 30,
    }
  });

  export default styles