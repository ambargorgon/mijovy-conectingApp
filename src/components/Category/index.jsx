import { View, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import styles from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const Category = ({ item, onSelected }) => {
  return (
    <View style={styles.categoriesItem}>
      <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
        <View style={styles.imageContainer}>
          {item.ion ? (
            <Ionicons name={item.icon} size={70} color={Colors.black} />
          ) : (
            <MaterialCommunityIcons
              name={item.icon}
              size={70}
              color={Colors.black}
            />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Category;
