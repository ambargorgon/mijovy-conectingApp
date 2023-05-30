import { Categorias } from "../../data/Categorias";
import { SELECTED_CATEGORY } from "../actions/category.action";

const initialState = {
  categorias: Categorias,
  selected: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      const indexCategory = state.categorias.findIndex(
        cat => cat.id === action.categoryId
      );
      if (indexCategory === -1) return state;
      return { ...state, selected: state.categorias[indexCategory] };
    default:
      return state;
  }
};

export default CategoryReducer;
