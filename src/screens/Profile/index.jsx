import React from "react";
import { View } from "react-native";
import styles from "./style";
import MyTabs from "../../navigation/TopBarNavigator"


const Profile = () => {
  return (
    <View style={styles.container}>
      <MyTabs />
    </View>
  );
};

export default Profile;

