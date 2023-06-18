import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ImageSelector from "../../../components/ImageSelector";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../../constants/Colors";

const Information = () => {
  const [image, setImage] = useState();

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.profileImage}>
          <ImageSelector onImage={setImage} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Emma Phillips</Text>
          <Text style={styles.description}>Profe de Yoga</Text>
        </View>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.data}>
          <Ionicons name="at" color={Colors.terciary} size={20} />
          <Text>emmaphillips@gmail.com</Text>
        </View>
        <View style={styles.data}>
          <Ionicons name="call" color={Colors.terciary} size={20} />
          <Text>+91 9 123456789</Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.itemContainer}>
          <Ionicons name="person" color={Colors.terciary} size={23} />
          <Text style={{ fontSize: 20 }}>Cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
          <Ionicons name="star" color={Colors.terciary} size={23} />
          <Text style={{ fontSize: 20 }}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
          <Ionicons name="bookmark" color={Colors.terciary} size={23} />
          <Text style={{ fontSize: 20 }}>Guardados</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Information;
