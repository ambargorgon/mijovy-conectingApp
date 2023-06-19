import { View, Text, Image, Button } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { add_item } from "../../../store/actions/inscription.action";
import { useDispatch } from "react-redux";

const Detail = ({ navigation, offer, name }) => {
  const dispatch = useDispatch();

  // const handleAddItem = ({item}) => {
  //   dispatch(add_item(offer));
  //   navigation.navigate("Inscription", {
  //     activityId: offer.id,
  //     name: offer.title,
  //   })
  // };

  return (
    <View>
      {/* <Image style={styles.image} source={{ uri: product.image }} /> */}
      <Text style={styles.title}>{name}</Text>
      {/* <Text>${offer.price} el mes</Text> */}
      {/* <Button title="Agregar al carrito" onPress={handleAddItem} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
  },
  image: {
    borderRadius: 20,
    width: "100%",
    height: "60%",
  },
});

export default Detail;
