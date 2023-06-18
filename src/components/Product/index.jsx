import { View, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
 
// price: 500,
// id: 9,
// activity: 6,
// title: 'Clases de ceramica',
// target:'Niños',
// location: "Barrio Ejemplo",
// author: "Centro Ejemplo",
// image: "https://cdn.pixabay.com/photo/2017/04/18/23/35/frog-2240764_1280.jpg",
// email: "email@ejemplo.com",
// celular: 203909320,
// description: "Clases los martes y jueves de 20 a 22hs."

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
          <Text>{item.author}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};



export default Product;
