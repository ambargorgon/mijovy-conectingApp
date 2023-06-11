import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
  },
  label: {
    marginVertical: 8,
  },
  input: {
    width: "90%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1.3,
    paddingLeft: 10,
    marginBottom: 3.5,
  },
  errorContainer: {
    marginTop: 6,
    marginBottom: 8,
  },
  errorText: {
    color: "red",
  },
});

export default styles;
