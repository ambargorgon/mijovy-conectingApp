import { createStore, combineReducers, applyMiddleware } from "redux";
import ActivitiesReducer from "./reducers/activity.reducer";
import CategoryReducer from "./reducers/category.reducer"
import inscriptionReducer from "./reducers/inscription.reducer";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth.reducer";
import OffersReducer from "./reducers/offers.reducer";
import LocationReducer from "./reducers/location.reducer"

const RootReducer = combineReducers({
    activities: ActivitiesReducer,
    categories: CategoryReducer,
    inscription: inscriptionReducer,
    auth: AuthReducer,
    offers: OffersReducer,
    location: LocationReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))