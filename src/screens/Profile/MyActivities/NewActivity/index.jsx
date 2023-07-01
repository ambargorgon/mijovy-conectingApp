import { View, Text, TextInput, Button, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles";
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../../../constants/Colors";
import { addOffer } from "../../../../store/actions/offers.actions";

const NewActivity = ({ navigation }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [activity, setActivity] = useState();
  const [target, setTarget] = useState("");
  const [location, setLocation] = useState("");


  console.log(title)
  console.log(image)

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
  }

  const LocationAndPriceCard = ({ title, value, category }) => {
    return (
      <TouchableOpacity
        style={[styles.frame, { backgroundColor: value === category ? Colors.primary : Colors.white }]}
        onPress={() => setActivity(category)}>
        <Text style={styles.title}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  const handleSave = () => {
    dispatch(
      addOffer(
        title,
        image,
        price,
        description,
        activity,
        target,
        location)
    );
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Imagen: </Text>
        <View
          style={[{ flex: 1, alignItems: "center", justifyContent: "center" },styles.imageContainer]}
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
        <Text style={styles.inputLabel}>Precio mensual: </Text>
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
        <View style={styles.titleCategory}>
          <Text style={styles.inputLabel}>Categoria: </Text>
          <Ionicons name="arrow-forward" size={23} color={"black"} style={{ marginTop: 5 }} />
        </View>
        <View style={styles.buttonsContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <LocationAndPriceCard
              category={1}
              title={'Basquet'}
              value={activity}
            />
            <LocationAndPriceCard
              category={2}
              title={'Badminton'}
              value={activity}
            />
            <LocationAndPriceCard
              category={3}
              title={'Handball'}
              value={activity}
            />
            <LocationAndPriceCard
              category={4}
              title={'Hip Hop'}
              value={activity}
            />
            <LocationAndPriceCard
              category={5}
              title={'Yoga'}
              value={activity}
            />
            <LocationAndPriceCard
              category={6}
              title={'Ceramica'}
              value={activity}
            />
            <LocationAndPriceCard
              category={7}
              title={'Pintura'}
              value={activity}
            />
            <LocationAndPriceCard
              category={8}
              title={'Guitarra'}
              value={activity}
            />
            <LocationAndPriceCard
              category={9}
              title={'Violin'}
              value={activity}
            />
            <LocationAndPriceCard
              category={10}
              title={'Trekking'}
              value={activity}
            />
            <LocationAndPriceCard
              category={11}
              title={'Ciclismo'}
              value={activity}
            />
          </ScrollView>
        </View>
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
      <Button title="Enviar" onPress={handleSave} style={styles.button} />
    </ScrollView>
  );

}

export default NewActivity;

