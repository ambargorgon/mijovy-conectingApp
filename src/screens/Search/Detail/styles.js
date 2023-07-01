// DETAIL
import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: Colors.fourth,
    marginBottom: 65,
},
detailContainer:{
    gap: 5,
    paddingHorizontal: 10,
},
question:{
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-between',flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-between',
},
image: {
    width:"100%",
    height: "40%"
},
title: {
    fontSize: 23,
    alignSelf: 'center',
}, 
description: {
    alignSelf:'center',
},
label:{
    fontSize: 17,
    fontFamily: 'bold',
},
dataContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-between',
}

});

export default styles;
