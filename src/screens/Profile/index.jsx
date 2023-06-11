import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImageSelector from "../../components/ImageSelector";
import Colors from "../../constants/Colors";

const Profile = () => {
  const [image, setImage] = useState();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>Nombre Usuario</Text>
        </View>
        <View style={styles.profileImage}>
          {!image && <Text>Agregar Imagen</Text>}
          <ImageSelector onImage={setImage} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 30,
    justifyContent: "space-between",
    backgroundColor: Colors.terciary,
  },
  name: {
    fontSize:20,
    marginBottom: 16,
    fontWeight: 'bold',

  },
  profileImage:{
    justifyContent: 'center',
    alignItems: "center",
    gap: 5,
  }
});
