//HOME
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  cardStyles: {
    width: "80%",
    alignSelf: "center",
    borderRadius: 20,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    backgroundColor: Colors.secondary,
  },
  list: {
    alignSelf: "center",
    width: "80%",
    flex: 1,
    backgroundColor: Colors.white,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  itemContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: Colors.black,
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-end",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: 4,
  },
  eventsContainer: {
    width: "100%",
    height: "30%",
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.black,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  noItem: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: Colors.secondary,
    padding: 13,
    borderRadius: 20,
    marginTop: 30,
    paddingHorizontal: 25,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 5,
  }
});
export default styles;
