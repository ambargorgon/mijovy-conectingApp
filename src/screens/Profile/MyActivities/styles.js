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
  
});

export default styles;
