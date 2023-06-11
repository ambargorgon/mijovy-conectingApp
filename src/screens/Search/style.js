// SEARCH
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 10,
    marginBottom: 50,
    backgroundColor: Colors.terciary,
    alignItems: "center",
  },
  categoriesContainer: {
    padding: 10,
    height: 130,
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
  },
  mapButton:{
    paddingHorizontal: 70,
    paddingVertical: 15,
    backgroundColor: Colors.white,
    borderRadius: 35,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent:'space-between',   
    alignItems: 'center',
    gap: 6,
  },
  buttonText:{
    fontSize: 18,
  }
});

export default styles;
