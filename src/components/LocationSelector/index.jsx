import * as Location from "expo-location";
import { StyleSheet, View, Alert, Button, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MapPreview from "../MapPreview";

const LocationSelector = ({ onLocation }) => {
  const navigation = useNavigation();
  const [picked, setPicked] = useState();

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permisos Insuficientes", [{ text: "Ok" }]);
      return false;
    }
    return true;
  };

  
  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions();
    if (!isLocationOk) return;
    
    const location = await Location.getCurrentPositionAsync();
    console.log("location", location)

    setPicked({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };



  return (
    <View style={styles.container}>
      <MapPreview location={picked} newStyles={styles.preview}>
        <Button title="Obtener Mi Ubicacion" onPress={handleGetLocation} />
      </MapPreview>
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: "100%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
