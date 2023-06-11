import { ADD_ITEM, REMOVE_ITEM, CONFIRM_ITEMS } from "../actions/inscription.action";

const initial_state = {
  items: [],
  total: 0,
};

const sumTotal = list => {
    return list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0);
};

const inscriptionReducer = (state = initial_state, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      const cleanCart = [...state.items].filter(
        (item) => item.id !== action.itemId
      );
      return { ...state, items: cleanCart, total: sumTotal(cleanCart) };
    case ADD_ITEM:
      const indexItem = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      if (indexItem === -1) {
        const item = { ...action.item, quantity: 1 };
        const updateCart = [ ...state.items, item ];
        return { ...state, items: updateCart, total: sumTotal(updateCart) };
      }

      const items = [ ...state.items ].map((item) => {
        if (item.id === action.item.id) item.quantity++;
        return item;
      });
      return { ...state, items, total: sumTotal(items) };
    case CONFIRM_ITEMS:
      return state;
    default:
      return state;
  }
};

export default inscriptionReducer;
