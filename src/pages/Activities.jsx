import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Activities = () => {
  const { state } = useApp();

  // Q1: Display valid activities using filter() on context data
  const validActivities = state.activities.filter(activity =>
    activity.steps > 0 &&
    activity.caloriesBurned > 0 &&
    activity.workoutMinutes > 0 &&
    typeof activity.goalAchieved === 'boolean'
  );

  return (
    <div>
      <h1>Activities</h1>
      <ul>
        {validActivities.map(activity => (
          <li key={activity.activityId} data-testid="activity-item">
            <Link to={`/activities/${activity.activityId}`}>
              {activity.name || 'Unknown'} - {activity.date || 'no date'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;