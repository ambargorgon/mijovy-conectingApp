// CATEGORY
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const styles =  StyleSheet.create({
    categoriesItem: {
        flex: 1, 
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowOffset: {width: 3, height:2},
        shadowRadius: 10,
        elevation: 5,
        justifyContent:"center",
    },
    container: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingLeft: 15,
        borderRadius: 20,
    },
    textContainer: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center",
    },
    imageContainer: {
        width: '40%',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: colors.white,
        fontSize: 18,
    }
})

export default styles