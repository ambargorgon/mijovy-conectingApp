import { createStore, combineReducers, applyMiddleware } from "redux";
import ActivitiesReducer from "./reducers/activity.reducer";
import CategoryReducer from "./reducers/category.reducer"
import inscriptionReducer from "./reducers/inscription.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    activities: ActivitiesReducer,
    categories: CategoryReducer,
    inscription: inscriptionReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))