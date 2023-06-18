// INPUTS
import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: "column",
    gap: 20,
    marginBottom: 150,
  },
  inputContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  inputLabel: {
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    marginHorizontal: 20,
    fontSize: 18,
  },
});

export default styles;
