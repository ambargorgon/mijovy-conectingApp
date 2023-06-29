import { View, Text, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import styles from "./styles"

const MyActivities = ({ navigation }) => {

  const offers = useSelector((state) => state.offers.offers);

  const handleNavigation = () => {
    navigation.navigate('NewActivity')
  }

  const handleRenderActivity = ({ item }) => (
    <View>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
      <View>
        <Ionicons name="pencil-sharp" size={25} />
      </View>
    </View>
  );


  return (
    <View style={styles.view}>
      <View style={styles.container}>
        {offers !== [] ?
          <Text style={styles.alert}> Aun no has añadido actividades</Text>
          :
          <FlatList
            data={offers}
            renderItem={handleRenderActivity}
            keyExtractor={(item) => item.id}
          />
        }
      </View>
      <View style={styles.container2}>
      <TouchableOpacity style={styles.touchable} onPress={handleNavigation}>
        <Ionicons name="add" size={28} color={"white"} />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyActivities;

