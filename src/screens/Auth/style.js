// SignIn
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    padding: 50,
    gap: 20,
  },
  text: {
    fontSize: 100,
    paddingTop: 100,
    color: Colors.secondary,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 20,
    fontFamily: 'titleFont'
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    gap: 40,
  },
  input: {
    width: "90%",
    borderBottomColor: Colors.black,
    borderBottomWidth: 1.3,
    paddingLeft: 10,
    marginBottom: 3.5,
  },
  card: {
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 12,
    width: "65%",
    backgroundColor: Colors.white,
  },
  cardText: {
    fontSize: 18,
  },
  SignIn: {
    color: Colors.white,
    textDecorationLine: "underline",
    fontSize: 16,
  },
  signIn: {
    marginTop: 50,
    gap: 20,
    width: "100%",
    alignItems: "center",
  },
  questionText: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignContent: 'center',
    alignItems: 'center'
  },
  mediaCard: {
    flexDirection: 'row',
    borderRadius: 50,
    width: "100%",
    paddingHorizontal: 30,
  },
  mediaContainer: {
    flexDirection: "column",
    gap: 20,
    width: 400,
    alignItems: "center"
  },
  signInText: {
    fontSize: 16,
  },
});

export default styles;
