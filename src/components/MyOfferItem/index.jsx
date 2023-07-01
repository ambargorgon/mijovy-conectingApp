import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const MyOfferItem = ({ title, image, description, location, price, item }) => {
 const navigation = useNavigation()
 
  const handleDetail = (item) => {
    navigation.navigate("Search", {screen:"Detail",  params: { offer: item }})
  }

  return (
    <View>
      <TouchableOpacity style={styles.offerItem} onPress={()=>handleDetail(item)}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text>{description}</Text>
          <Text>{location}</Text>
          <Text>{`$${price}`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyOfferItem;

const styles = StyleSheet.create({
  offerItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  info: {
    marginLeft: 35,
    flex: 1,
    justifyContent: "center",
    alignItem: "flex-start",
  },
  title: {
    color: "black",
    fontSize: 18,
  },
  description: {
    color: "#777",
  },
});
