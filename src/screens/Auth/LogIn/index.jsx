import {
        View,
        Text,
        TouchableOpacity,
        KeyboardAvoidingView,
      } from "react-native";
import React, {useState } from "react";
import styles from "./style";
import Card from "../../../components/Card";
import Input from "../../../components/input";
  
  const LogIn = ({ newStyles}) => {
    const [error, setError] = useState(null);
  
  const handleChange = () => {
    console.log("input")
  }

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={50}
      >
        <View style={styles.inputContainer}>
        <Text style={{ ...styles.text, ...newStyles }}>INICIAR SESION</Text>
          <Input
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
          />
          <Card otherStyles={styles.card}>
            <TouchableOpacity style={styles.cardText}>
              <Text>Iniciar Sesion</Text>
            </TouchableOpacity>
          </Card>
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default LogIn;
  