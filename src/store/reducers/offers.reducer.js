import { ADD_OFFER, LOAD_OFFER } from "../actions/offers.actions";

import Offer from '../../models/Offer'

const initialState = {
  offers: [],
};

export const OffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OFFER:
      const newOffer = new Offer( action.payload.toString(), action.payload.title, action.payload.image, action.payload.price.toString(), action.payload.description, action.payload.activity.toString(), action.payload.target, action.payload.location, action.payload.author, action.payload.email);
      console.log("Recibido")
      return { ...state, offers: state.offers.concat(newOffer) };

    case LOAD_OFFER:
      return {
        ...state,
        offers: action.offers.map(item => new Offer(
          item.id.toString(),
          item.title,
          item.image,
          item.price.toString(),
          item.description,
          item.activity.toString(),
          item.target,
          item.location,
          item.author,
          item.email
        ))
      }  
    
    default:
      return state;
  }
};
