import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style"
import Category from "../../components/Category";
import { useSelector, useDispatch} from "react-redux";
import { selectedCategory } from "../../store/actions/category.action";
import Ionicons from "@expo/vector-icons/Ionicons";


const Search = ({ navigation }) => {

  const categories = useSelector((state) => state.categories.categorias)
  const dispatch = useDispatch();


  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id))
    navigation.navigate("Activities", {
      name: item.title,
    });
  };

  const renderCategories = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <Category item={item} onSelected={handleSelectedCategory} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.mapButton} onPress={()=> navigation.navigate("Mapa")}>
        <Text style={styles.buttonText}>Buscar en el mapa</Text>
        <Ionicons name="search-sharp" color={"black"} size={19} />
      </TouchableOpacity>
      <FlatList
        data={categories}
        renderItem={renderCategories}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Search;
