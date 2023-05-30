import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./style";
import Category from "../../components/Category";
import { useSelector, useDispatch} from "react-redux";
import { selectedCategory } from "../../store/actions/category.action";

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
      <FlatList
        data={categories}
        renderItem={renderCategories}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Search;
