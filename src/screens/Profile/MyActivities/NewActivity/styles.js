// INPUTS
import { StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: "column",
    gap: 20,
    marginBottom: 65,
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
  imageSelector:{
    borderRadius: 0,
    height: 120,
    width: 120,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  touchable: {
    backgroundColor: Colors.primary,
    borderRadius: 50,
    width: 55,
    height: 55,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;
