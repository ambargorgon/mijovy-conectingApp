import { View, Text, FlatList } from "react-native";
import React from "react";
import ActivitiesList from "../../../data/ActivitiesList";
import Product from "../../../components/Product";
import styles from "./styles";

const Activities = ({ navigation, route }) => {

  const filterActivities = ActivitiesList.filter(act => act.category === route.params.categoryId)
  
  const handleSelectedCategory = (item) => {
    navigation.navigate("Detail", {
      categoryId: item.id,
      name: item.title,
    });
  };

  const renderCategories = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <Product item={item} onSelected={handleSelectedCategory} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filterActivities}
        renderItem={renderCategories}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Activities;
