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
  dataContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    gap: 5,
    margin: 0,

  },
  data: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    borderLeftWidth: 1,
    borderLeftColor: "#ccc",
    width: 200,
    height: '100%',
    margin: 0,
    gap: 5,
  },
});

export default styles;
