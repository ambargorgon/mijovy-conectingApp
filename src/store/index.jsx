import { createStore, combineReducers, applyMiddleware } from "redux";
import ActivitiesReducer from "./reducers/activity.reducer";
import CategoryReducer from "./reducers/category.reducer"
import inscriptionReducer from "./reducers/inscription.reducer";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth.reducer";
import { PlacesReducer } from "./reducers/places.reducer";

const RootReducer = combineReducers({
    activities: ActivitiesReducer,
    categories: CategoryReducer,
    inscription: inscriptionReducer,
    auth: AuthReducer,
    places: PlacesReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))