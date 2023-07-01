import { View, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
 
const Product = ({ item, onSelected }) => {
  return (
    <View style={styles.categoriesItem}>
      <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: item.image}}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.title}</Text>
          <Text>Para: {item.target}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};



export default Product;
