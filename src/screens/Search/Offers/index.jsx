import { View, Text, FlatList } from 'react-native'
import React from 'react'
import OffersList from "../../../data/OffersList"
import { selectedActivity } from '../../../store/actions/activity.action'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../../../components/Product'
import styles
 from '../style'


const Offers = ({navigation, item}) => {
  const dispatch= useDispatch()
  const product = useSelector((state) => state.activities.selected);
  const filteredOffers = OffersList.filter((item)=> item.activity === product.id)
  
  console.log("FILTERED ACTIVITY", filteredOffers)


  const handleSelectedOffer = (item) =>{
      dispatch(selectedActivity(item.id));
      navigation.navigate("Detail", {
        offer: item,
        name: item.title
      })
  }

  const renderOffers = ({item}) => (
  <View style={styles.categoriesContainer}>
    <Product item={item} onSelected={()=>handleSelectedOffer(item)} />
  </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
      data={filteredOffers}
      renderItem={renderOffers}
      keyExtractor={(item) => item.id}/>
    </View>
  )
}

export default Offers