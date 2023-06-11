import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container:{
        width: '30%',
        backgroundColor: Colors.white,
        maxWidth: '80%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        shadowColor: Colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation: 5,
        borderRadius: 10,
        gap: 10,
    }
})

export default styles