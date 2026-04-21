import React from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const ActivityDetail = () => {
  const { id } = useParams();
  const { state, dispatch } = useApp();
  const activity = state.activities.find(a => a.activityId === parseInt(id));

  if (!activity) return <div>Activity not found</div>;

  // Q2: Activity detail view
  // Q4: Goal status update
  const toggleGoal = () => {
    dispatch({
      type: 'UPDATE_ACTIVITY',
      payload: { activityId: activity.activityId, goalAchieved: !activity.goalAchieved }
    });
  };

  return (
    <div>
      <h1>Activity Detail</h1>
      <p>Name: {activity.name || 'Unknown'}</p>
      <p>Steps: {activity.steps}</p>
      <p>Calories Burned: {activity.caloriesBurned}</p>
      <p>Workout Minutes: {activity.workoutMinutes}</p>
      <p>Goal Achieved: {activity.goalAchieved ? 'Yes' : 'No'}</p>
      <p>Date: {activity.date || 'no date'}</p>
      <button onClick={toggleGoal}>Toggle Goal Status</button>
    </div>
  );
};

export default ActivityDetail;