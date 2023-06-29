// ACTIVITIES
import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 25,
    marginBottom: 50,
    backgroundColor: Colors.terciary,
    width: "100%",
  },
  categoriesContainer: {
    padding: 10,
    height: 430,
    width: 360,
  },
  text: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: "titleFont",
    fontSize: 30,
  },
  titleText:{
    fontSize: 20,
    color: Colors.white,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    fontWeight: "bold",
    paddingBottom: 4,
  }
});

export default styles;
