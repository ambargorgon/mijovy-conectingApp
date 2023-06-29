import { View, Text, ScrollView, TextInput, Button, Image } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles";
import * as ImagePicker from 'expo-image-picker';
import addOffer from "../../../../store/actions/offers.actions"
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const NewActivity = ({ navigation }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [activity, setActivity] = useState();
  const [target, setTarget] = useState("");
  const [location, setLocation] = useState("");
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    dispatch(
      addOffer(
        title,
        image,
        price,
        description,
        activity,
        target,
        location,
        author,
        email
      )
    );
    navigation.navigate("Home");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (result !== null) {
      console.log(result.assets[0].uri)
      setImage(result.assets[0].uri);
    }

    return (
      <>
        <ScrollView style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Imagen: </Text>
            <View
              style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            >
              <TouchableOpacity style={styles.touchable} onPress={pickImage}>
                <Ionicons name="image-sharp" size={28} color={"white"} />
              </TouchableOpacity>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
              )}
             </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Titulo: </Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              required
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Descripcion: </Text>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={setDescription}
              required
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Precio: </Text>
            <TextInput
              style={styles.input}
              inputMode="numeric"
              keyboardType="number-pad"
              value={price}
              onChangeText={setPrice}
              required
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>ID de Actividad: </Text>
            <TextInput
              inputMode="numeric"
              keyboardType="number-pad"
              style={styles.input}
              value={activity}
              onChangeText={setActivity}
              required
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Target: </Text>
            <TextInput
              style={styles.input}
              value={target}
              onChangeText={setTarget}
              required
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Locacion: </Text>
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={setLocation}
              required
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Autor: </Text>
            <TextInput
              style={styles.input}
              value={author}
              onChangeText={setAuthor}
              required
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email: </Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              required
            />
          </View>
          <Button title="Enviar" onPress={handleSave} style={styles.button} />
        </ScrollView>
      </>
    );
  };
}

export default NewActivity;

