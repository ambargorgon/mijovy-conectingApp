import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  TextInput
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Card from "../../../components/Card";
import Input from "../../../components/input";
import auth from '@react-native-firebase/auth'
import { signInWithEmailAndPassword } from '@react-native-firebase/auth'
const LogIn = ({ newStyles }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
    } catch (error) {
      console.log(error)
      Alert.alert("Email o Contrasenia incorrectos")
    } finally {
    }
  }


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={50}
    >
      <View style={styles.inputContainer}>
        <Text style={{ ...styles.text, ...newStyles }}>INICIAR SESION</Text>
        <TextInput style={styles.input}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput style={styles.input}
          secureTextEntry={true}
          value={password}
          placeholder="Contraseña"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />

        {/* <Input
            id="email"
            label="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            required
            email
            initialValue=""
            onInputChange={handleChange}
          />
          <Input
            id="password"
            label="Contraseña"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            required
            password
            secureTextEntry
            initialValue=""
            onInputChange={handleChange}
          /> */}
        <Card otherStyles={styles.card}>
          <TouchableOpacity style={styles.cardText} onPress={signIn}>
            <Text>Iniciar Sesion</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LogIn;
