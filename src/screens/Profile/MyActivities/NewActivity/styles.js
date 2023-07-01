// INPUTS
import { StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: "column",
    gap: 20,
    marginBottom: 65,
  },
  inputContainer: {
   marginHorizontal: 10,
   marginBottom: 5,
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
    marginRight: 10,
  },
  buttonsContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: 'row',
    gap: 5,
  },
  frame: {
    margin: 5,
    padding: 10,
    width: 88,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  titleCategory:{
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  imageContainer:{
    flexDirection: 'row',

  }
});

export default styles;
