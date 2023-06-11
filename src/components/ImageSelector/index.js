import { StyleSheet, Text, View, Button, Image, Alert, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Colors from "../../constants/Colors";

const ImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissons = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesitamos permiso para usar la camara",
        [{ text: "Ok" }]
      );

      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const hasPermission = await verifyPermissons();
    if (!hasPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    setPickedUri(image.assets[0].uri);
    props.onImage(image.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri ? (
          <TouchableOpacity onPress={handlerTakeImage}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }} />
        )}
      </View>
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    elevation: 1,
    width: 80,
    height: 80,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.terciary,
    borderWidth: 1,
    borderRadius: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text:{
    textAlign: "center",
    fontSize: 23,
  }
});
