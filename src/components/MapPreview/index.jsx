import { View, Text, Image, StyleSheet } from "react-native";
import React, { Children } from "react";
import map from "../../constants/map";

const MapPreview = ({ location, children , newStyles}) => {
    const mapPreviewURL = location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${location.lat},${location.lng}&key=${map.API_KEY}`
    : " ";

    return (
    <View style={{...styles.mapPreview, ...newStyles}}>
      {location ? <Image  style={styles.mapImage} source={{ uri: mapPreviewURL }} /> : children}
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: "center",
        alignItems: "center",
    },
    mapImage:{
        width: "100%",
        height: "100%"
    }
})