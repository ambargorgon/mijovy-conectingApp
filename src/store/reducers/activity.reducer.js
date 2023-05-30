import ActivitiesList from "../../data/ActivitiesList";
import {
  SELECTED_ACTIVITY,
  FILTERED_ACTIVITIES,
} from "../actions/activity.action";

const initialState = {
  activities: ActivitiesList,
  filteredActivities: [],
  selected: null,
};

const ActivitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ACTIVITY:
      return {
        ...state,
        selected: state.activities.find(
          (product) => product.id === action.activityId
        ),
      };
    case FILTERED_ACTIVITIES:
      return {
        ...state,
        filteredActivities: state.activities.filter(
          (product) => product.category === action.categoryId
        ),
      };
    default:
      return state;
  }
};

export default ActivitiesReducer;
