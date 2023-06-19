import * as FileSystem from "expo-file-system";
import { insertOffer, fetchOffer } from "../../../db";
import OffersList from "../../data/OffersList";


export const ADD_OFFER = "ADD_OFFER";
export const LOAD_OFFER = "LOAD_OFFER"

export const addOffer = (title, image, price, description, activity, target, location, author, email) => {
  return async (dispatch) => {
    try {
      const result = await insertOffer(
        OffersList.title,
        OffersList.image,
        OffersList.price,
        OffersList.description,
        OffersList.activity,
        OffersList.target,
        OffersList.location,
        OffersList.author,
        OffersList.email
      )
      
      dispatch({type: ADD_OFFER, payload: {title, image, price, description, activity, target, location, author, email}})
      console.log("addoffer",result)
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };
};

export const loadOffer = () => {
  return async dispatch => {
    try {
      const result = await fetchOffer()
      dispatch({type: LOAD_OFFER, offers: result.rows._array})
      console.log('actionresult', result)
    }catch (error) {
      throw error
    }
  }
}