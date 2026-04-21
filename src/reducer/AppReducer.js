export const initialState = {
  activities: []
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      // Filter out invalid entries: steps <=0, caloriesBurned <=0, workoutMinutes <=0, goalAchieved not boolean
      const validActivities = action.payload.filter(activity =>
        activity.activityId &&
        activity.steps > 0 &&
        activity.caloriesBurned > 0 &&
        activity.workoutMinutes > 0 &&
        typeof activity.goalAchieved === 'boolean'
      );
      return { ...state, activities: validActivities };
    case 'UPDATE_ACTIVITY':
      const updatedActivities = state.activities.map(activity =>
        activity.activityId === action.payload.activityId
          ? { ...activity, goalAchieved: action.payload.goalAchieved }
          : activity
      );
      return { ...state, activities: updatedActivities };
    default:
      return state;
  }
};