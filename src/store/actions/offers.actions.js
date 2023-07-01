import * as FileSystem from "expo-file-system";
import { insertOffer, fetchOffer } from "../../../db";


export const ADD_OFFER = "ADD_OFFER";
export const LOAD_OFFER = "LOAD_OFFER"

export const addOffer = (title, image, price, description, activity, target, location) => {
  return async dispatch => {
    try {
      const result = await insertOffer(
        title,
        image,
        price,
        description,
        activity,
        target,
        location,
      )
      console.log('result', result)
    } catch (error) {
      console.log(error.message);
      throw error;
    }
    dispatch({type: ADD_OFFER, payload: {title, image, price, description, activity, target, location}})
  };
};

export const loadOffer = () => {
  return async dispatch => {
    try {
      const result = await fetchOffer()
      console.log('resultLoad', result)
      dispatch({type: LOAD_OFFER, offers: result.rows._array})
    }catch (error) {
      throw error
    }
  }
}