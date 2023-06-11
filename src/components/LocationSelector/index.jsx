import { StyleSheet, Text, View, Alert, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
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

  useEffect(() => {
    handleGetLocation();
  }, []);

  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions();
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync();

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
        <Text>Ubicacion en proceso...</Text>
      </MapPreview>
      {/* <Button title="Obtener Ubicacion" onPress={handleGetLocation} /> */}
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
    height: 600,
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
