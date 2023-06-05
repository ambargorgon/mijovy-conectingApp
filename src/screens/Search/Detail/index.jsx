import { View, Text, Image, Button } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { add_item } from "../../../store/actions/inscription.action";
import { useDispatch } from "react-redux";

const Detail = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.activities.selected);

  const handleAddItem = () => {
    dispatch(add_item(product));
    navigation.navigate("Inscription", {
      activityId: product.id,
      name: product.title,
    })
  };

  return (
    <View>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text>{product.title}</Text>
      <Text>${product.price} el mes</Text>
      <Button title="Agregar al carrito" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    width: "100%",
    height: "60%",
  },
});

export default Detail;
