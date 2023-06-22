import { Text, Button, View, FlatList } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import Card from "../../components/Card";
import styles from "./style";
import EventsList from "../../data/EventsList";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import MyOfferItem from "../../components/MyOfferItem";
import { loadOffer } from "../../store/actions/offers.actions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers.offers);
  console.log("recibido offers", offers)


  useEffect(() => {
    dispatch(loadOffer());
  }, []);

  const handleRenderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.location}</Text>
      <Text>{item.time}</Text>
      {item.price === 0 ? <Text>Gratis</Text> : <Text>{item.price}</Text>}
    </View>
  );

  const handleRenderActivity = ({ item }) => (
    <View>
      <MyOfferItem
        title={item.title}
        image={item.image}
        description={item.description}
        onSelect={() =>
          navigation.navigate("MyActivities", { offerId: item.id })
        }
      />
    </View>
  );

  const handleNavigation = () => {
    navigation.navigate("Calendar");
  };

  return (
    <View style={styles.container}>
      <Card
        otherStyles={{
          borderRadius: 30,
          height: 35,
          padding: 0,
          marginBottom: 10,
        }}
      >
        <Text style={styles.text}>Tu Locacion</Text>
      </Card>
      <View style={styles.eventsContainer}>
        <Card otherStyles={styles.cardStyles}>
          <View style={styles.titleContainer}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: Colors.primary,
              }}
            >
              Proximos Eventos
            </Text>
            <Ionicons
              onPress={handleNavigation}
              name="calendar-outline"
              color={Colors.primary}
              size={25}
            />
          </View>
        </Card>
        <View style={styles.list}>
          <FlatList
            data={EventsList}
            renderItem={handleRenderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={styles.eventsContainer}>
        <Card otherStyles={styles.cardStyles}>
          <View style={styles.titleContainer}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: Colors.primary,
              }}
            >
              Mis actividades
            </Text>
          </View>
        </Card>
        <View style={styles.list}>
          <FlatList
            data={offers}
            renderItem={handleRenderActivity}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
