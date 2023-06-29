import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import ImageSelector from "../../../components/ImageSelector";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../../constants/Colors";
import auth from "@react-native-firebase/auth"
import { Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "../../../store/actions/auth.action";
import { useDispatch } from "react-redux";
import { Image } from "react-native";

const Information = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({})
  const [googleUser, setGoogleUser] = useState({})

  useEffect(() => { 
    getData() }, [])
    
    const getData = async () => {
      const getUser = await AsyncStorage.getItem("UserLoggedInData")
      const userOb = JSON.parse(getUser)
      setUser(userOb.user)
      
      const current =  auth().currentUser
      if (current) {setGoogleUser(current) }
  }

  const handleSignOut = async () => {
    auth()
      .signOut()
      .then(() => console.log("User Signed out"))

    AsyncStorage.removeItem("UserLoggedInData");

    dispatch(signOut())
  }

  console.log("Information", user)
  console.log("Information Google", googleUser)
  
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.profileImage}>
          {googleUser.photoURL ?
            <Image source={{ uri: googleUser.photoURL }} style={styles.image} />
            :
            <ImageSelector onImage={setImage} />}
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{user ? user.name :  googleUser.displayName }</Text>
          <View style={styles.data}>
            <Ionicons name="at" color={Colors.primary} size={20} />
            <Text>{ user ? user.email : googleUser.email }</Text>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.itemContainer} onPress={() => setModal(true)}>
          <Ionicons name="person" color={Colors.primary} size={23} />
          <Text style={{ fontSize: 20 }}>Cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={() => setModal(true)}>
          <Ionicons name="star" color={Colors.primary} size={23} />
          <Text style={{ fontSize: 20 }}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={() => setModal(true)}>
          <Ionicons name="bookmark" color={Colors.primary} size={23} />
          <Text style={{ fontSize: 20 }}>Guardados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={handleSignOut}>
          <Ionicons name="log-out" color={Colors.primary} size={23} />
          <Text style={{ fontSize: 20 }}>Cerrar Sesion</Text>
        </TouchableOpacity>
        <Modal style={styles.modalContainer} visible={modal} animationType="slide">
          <View style={styles.modal}>
            <TouchableOpacity style={styles.button} onPress={() => setModal(false)}>
              <Ionicons name="close-circle" color={Colors.black} size={30} />
            </TouchableOpacity>
            <Text>Oops... Componente en construccion</Text>
            <Ionicons name="construct" color={"black"} size={80} />
          </View>
        </Modal>
      </View>
    </>
  );
};

export default Information;
