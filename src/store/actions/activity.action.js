export const SELECTED_ACTIVITY = "SELECTED_ACTIVITY"; 
export const FILTERED_ACTIVITIES = "FILTERED_ACTIVITIES";

export const selectedActivity = (id) => ({
  type: SELECTED_ACTIVITY,
  activityId: id,
});

export const filteredActivities = (id) => ({
  type: FILTERED_ACTIVITIES,
  categoryId: id,
});
