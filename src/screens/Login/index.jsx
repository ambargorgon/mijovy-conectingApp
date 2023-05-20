import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./style";
import Card from "../../components/Card";

const index = ({ newStyles }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, ...newStyles }}>MIJOVY</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email o Usuario" style={styles.input} />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.input}
        />
        <Card otherStyles={styles.card}>
          <Text style={styles.cardText}>Iniciar Sesion</Text>
        </Card>
      </View>
      <Text style={styles.passwordText}>Olvidaste tu Contraseña?</Text>
      <View style={styles.signIn}>
        <View style={styles.questionText}>
          <Text>Primera Vez?</Text>
          <Text>Registrate</Text>
        </View>
        <Card otherStyles={styles.mediaCard}>
            <Text style={styles.signInText}>Ingresar con Google</Text>
        </Card>
        <Card otherStyles={styles.mediaCard}>
            <Text style={styles.signInText}>Ingresar con Facebook</Text>
        </Card>
      </View>
    </View>
  );
};

export default index;
