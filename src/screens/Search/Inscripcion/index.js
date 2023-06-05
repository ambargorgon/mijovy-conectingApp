import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style";
import { confirm_items, remove_item } from "../../../store/actions/inscription.action";

const Inscripcion = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.inscription.items);
  const total = useSelector((state) => state.inscription.total);

  const handleDeleteItem = id => {
    dispatch(remove_item(id))
  }

  const handleConfirmInscription = () =>{
    dispatch(confirm_items(items, total))
  } 
  const renderItem = ({ item }) => (
    <View >
      <Text>{item.title}</Text>
      <Text>${item.price}</Text>
      <TouchableOpacity onPress={handleDeleteItem}>
        <Text>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View  style={styles.formContainer}>
        <Text>Nombre</Text>
        <Text>email</Text>
        <Text>Telefono</Text>
        <Text>${total}</Text>
        <Button title="CONFIRMAR" onPress={handleConfirmInscription}/>
      </View>
    </View>
  );
};

export default Inscripcion;
