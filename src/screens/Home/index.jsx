import { Text, Button, View } from "react-native";
import React from "react";
import Card from "../../components/Card";
import styles from "./style";
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card otherStyles={{ borderRadius: 30, height: 35, padding: 0 }}>
        <Text style={styles.text}>Tu Locacion</Text>
      </Card>
    </View>
  );
};

export default Home;
