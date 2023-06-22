import { View, Text, ScrollView, TextInput, Button } from "react-native";
import React, { useState } from "react";
import ImageSelector from "../../../components/ImageSelector";
import { addOffer } from "../../../store/actions/offers.actions";
import { useDispatch } from "react-redux";
import styles from "./styles";

const MyActivities = ({ navigation }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
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
    console.log("enviado")
  };

  return (
    <ScrollView style={styles.container}>
      {/* <ImageSelector onImage={setImage} /> */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Imagen URL: </Text>
        <TextInput
          style={styles.input}
          value={image}
          onChangeText={setImage}
          required
        />
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
      <Button title="Enviar" onPress={handleSave} />
    </ScrollView>
  );
};

export default MyActivities;

{
  /* <RNPickerSelect
  onValueChange={(value) => setActivity(value)}
  useNativeAndroidPickerStyle={false}
  placeholder={{ label: "Actividad Correspondiente", value: null }}
  items={[
    { label: "Otros", value: "Otros" },
    { label: "Clases de Basquet", value: "Clases de Basquet" },
    { label: "Clases de Badminton", value: "Clases de Badminton" },
    { label: "Clases de Handball", value: "Clases de Handball" },
    { label: "Clases de Hip Hop", value: "Clases de Hip Hop" },
    { label: "Clases de Yoga", value: "Clases de Yoga" },
    { label: "Clases de Ceramica", value: "Clases de Ceramica" },
    { label: "Pintura", value: "Pintura" },
    { label: "Clases de Guitarra", value: "Clases de Guitarra" },
    { label: "Clases de Violin", value: "Clases de Violin" },
    { label: "Trekking", value: "Trekking" },
    { label: "Ciclismo", value: "Ciclismo" },
  ]} */
}
// />
