import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";
import styles from "./style";
import Card from "../../components/Card";

const index = ({ newStyles }) => {
  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50}>
      <View style={styles.container}>
        <Text style={{ ...styles.text, ...newStyles }}>MIJOVY</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            style={styles.input}
          />
          <Card otherStyles={styles.card}>
            <Text style={styles.cardText}>Registrate</Text>
          </Card>
        </View>
        <Text style={styles.passwordText}>Olvidaste tu Contraseña?</Text>
        <View style={styles.signIn}>
          <View style={styles.questionText}>
            <Text>Ya eres usuario?</Text>
            <Text>Inicia Sesion</Text>
          </View>
          <Card otherStyles={styles.mediaCard}>
            <Text style={styles.signInText}>Ingresar con Google</Text>
          </Card>
          <Card otherStyles={styles.mediaCard}>
            <Text style={styles.signInText}>Ingresar con Facebook</Text>
          </Card>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default index;
