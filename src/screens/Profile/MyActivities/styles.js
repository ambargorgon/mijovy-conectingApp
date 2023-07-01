// MY ACTIVITIES
import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginBottom: 60,
  },
  container:{
    flex: 1,
  },
  container2: {
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    elevation: 10,
  },
  touchable:{
    backgroundColor: Colors.primary,
    borderRadius: 50,
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 35,
  },
  alert: {
    fontSize: 18,
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    paddingTop: 50,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemContainer:{
    flexDirection: 'row',
    marginBottom: 10,
    paddingBottom: 10,
    height: 90,
    alignContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  listContainer:{
    margin: 20,
  }
});

export default styles;
