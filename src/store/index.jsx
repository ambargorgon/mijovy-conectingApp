import { createStore, combineReducers } from "redux";
import ActivitiesReducer from "./reducers/activity.reducer";
import CategoryReducer from "./reducers/category.reducer"

const RootReducer = combineReducers({
    activities: ActivitiesReducer,
    categories: CategoryReducer,
})

export default createStore(RootReducer)