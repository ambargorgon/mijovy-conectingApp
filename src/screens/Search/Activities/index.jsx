import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  filteredActivities,
  selectedActivity,
} from "../../../store/actions/activity.action";
import Activity from "../../../components/Activity";

const Activities = ({ navigation }) => {
  const filteredActivities_ = useSelector(
    (state) => state.activities.filteredActivities
  );
  const categorySelected = useSelector((state) => state.categories.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filteredActivities(categorySelected.id));
  }, []);

  const handleSelectedActivity = (item) => {
    dispatch(selectedActivity(item.id));
    navigation.navigate("Offers", {
      activity: item,
  
    });
  };

  const renderActivities = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <Activity item={item} onSelected={handleSelectedActivity} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredActivities_}
        renderItem={renderActivities}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Activities;
