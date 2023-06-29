// PROFILE
import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    padding: 30,
    justifyContent: "flex-start",
    backgroundColor: Colors.terciary,
    gap: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 0,
  },
  description: {
    padding: 0,
  },
  nameContainer: {
    flexDirection: "column",
    alignItems: 'flex-start',
    alignContent: "flex-start",
    gap: 5,
  },
  profileImage: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listContainer: {
    flexDirection: "column",
  },
  itemContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 13,
    gap: 10,
  },

  data: {
    flexDirection: "row",
    gap: 5,
  },
  modal: {
    margin: 20,
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
  },
  button:{
    alignSelf: "flex-end",
  },
  modalContainer: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    elevation: 5,
  }, 
  viewContainer:{
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: 800,
    height: 500
  },
  image:{
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.terciary,
    borderWidth: 1,
    borderRadius: 50,
  }
});

export default styles;
