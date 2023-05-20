// LOGIN
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    padding: 50,
    gap: 20,
  },
  text: {
    fontSize: 100,
    paddingTop: 60,
    color: colors.white,
    textShadowColor: colors.black,
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
    borderBottomColor: colors.black,
    borderBottomWidth: 1.3,
    paddingLeft: 10,
    marginBottom: 3.5,
  },
  card: {
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 12,
    width: "65%",
  },
  cardText: {
    fontSize: 18,
  },
  passwordText: {
    color: colors.white,
    textDecorationLine: "underline",
    fontSize: 12,
  },
  signIn: {
    marginTop: 30,
    gap: 20,
    width: "100%",
    alignItems: "center",
  },
  questionText: {
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
  },
  mediaCard: {
    borderRadius: 50,
    width: "100%",
    paddingHorizontal: 30,
    
  },
  signInText: {
    fontSize: 16,
  },
});

export default styles;
