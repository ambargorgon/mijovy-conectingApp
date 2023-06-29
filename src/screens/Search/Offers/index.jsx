import { View, Text, FlatList } from 'react-native'
import React from 'react'
import OffersList from "../../../data/OffersList"
import { selectedActivity } from '../../../store/actions/activity.action'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../../../components/Product'
import styles from './style'

const Offers = ({route,  navigation }) => {
  const { activity } = route.params
  const filteredOffers = OffersList.filter((item) => item.activity === activity.id)

  console.log("FILTERED ACTIVITY", filteredOffers)


  const handleSelectedOffer = (item) => {
    console.log("ITEM", item)
    console.log("ITEMID", item.id)
    navigation.navigate("Detail", {
      offer: item,
    })
  }

  const renderOffers = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <Product item={item} onSelected={() => handleSelectedOffer(item)} />
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredOffers}
        renderItem={renderOffers}
        keyExtractor={(item) => item.id} />
    </View>
  )
}

export default Offers