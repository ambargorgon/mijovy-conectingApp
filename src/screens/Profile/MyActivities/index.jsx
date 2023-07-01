import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles"
import { useDispatch,  useSelector  } from "react-redux";
import { loadOffer } from "../../../store/actions/offers.actions";

const MyActivities = ({ navigation }) => {
  const dispatch = useDispatch();

  const offers = useSelector((state) => state.offers.offers);

  useEffect(() => {
    dispatch(loadOffer());
  }, []);

const handleDetail = (item) => {
  navigation.navigate("Search", {screen:"Detail",  params: { offer: item }})
}

  const handleRenderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={()=>handleDetail(item)}>
      <View> 
        <Image style={styles.image} source={{ uri: item.image }} />
      </View>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.location}</Text>
        <Text>{`$${item.price}`}</Text>
      </View>
    </TouchableOpacity>
  )

  const handleNavigation = () => {
    navigation.navigate('NewActivity')
  }

  return (
    <View style={styles.view}>
      <View style={styles.container}>
        {offers === [] ?
          <Text style={styles.alert}> Aun no has añadido actividades</Text>
          :
          <View style={styles.listContainer}>
            <FlatList
              data={offers}
              renderItem={handleRenderItem}
              keyExtractor={(item) => item.title}
            />
          </View>
        }
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.touchable} onPress={handleNavigation}>
          <Ionicons name="add" size={28} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyActivities;

