// PRODUCT
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
    },
    container: {
        backgroundColor: colors.fourth,
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    
    },
    textContainer: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: "center",
    },
    imageContainer: {
        padding: 10,
        width: '100%',
        height: "70%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        borderRadius: 20,
        width: "100%",
        height: "100%"
    },
    text:{
        color: colors.black,
        fontSize: 18,
    }
})

export default styles