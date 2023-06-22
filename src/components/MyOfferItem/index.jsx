import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const MyOfferItem = ({ title, image, description, onSelect }) => {
  return (
    <View>
      <TouchableOpacity style={styles.offerItem} onPress={onSelect}>
        {/* <Image style={styles.image}/> */}
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
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
    marginBottom: 16,
  },
  description: {
    color: "#777",
  },
});
