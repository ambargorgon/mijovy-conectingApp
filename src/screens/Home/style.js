//HOME 
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
    },
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        gap: 10,
        justifyContent: "flex-start",
      },
  });

  export default styles