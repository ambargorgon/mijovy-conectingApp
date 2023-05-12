import { Text, Button, View } from "react-native";
import React from "react";
import Card from "../../components/Card";
import styles from "./style";
import Header from '../../components/Header'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header/>
      <Card otherStyles={{ borderRadius: 30, height: 35, padding: 0 }}>
        <Text style={styles.text}>Tu Locacion</Text>
      </Card>
        <Button title="Navegar a Search" onPress={() => navigation.navigate("Search")} />
    </View>
  );
};

export default Home;
