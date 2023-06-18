// CALENDAR
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fourth,
    alignItems: "center",
    width: "100%",
    paddingBottom: 70,
  },

  calendar: {
    flex: 1,
    borderRadius: 10,
    elevation: 4,
    marginVertical: 5,
    width: 400,
    height: "auto",
  },
  modal: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    elevation: 5,
  },
  closeButton: {
    width: 25,
    height: 25,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    gap: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "#687C9E",
    borderRadius: 20,
    padding: 40,
    shadowColor: "#000",
    gap: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "85%",
    height: "40%",
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    alignSelf: "flex-end",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: Colors.terciary,
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  modalTextSec: {
    fontWeight: "500",
    fontSize: 17,
  },
});

export default styles;
