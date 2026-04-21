import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';

const Stats = () => {
  const { state } = useApp();

  // Q5: Activities analytics dashboard
  const totalActivities = state.activities.length;
  const goalAchieved = state.activities.filter(activity => activity.goalAchieved).length;
  const goalNotAchieved = totalActivities - goalAchieved;
  const totalSteps = state.activities.reduce((sum, activity) => sum + activity.steps, 0);
  const averageCalories = totalActivities > 0 ? state.activities.reduce((sum, activity) => sum + activity.caloriesBurned, 0) / totalActivities : 0;

  useEffect(() => {
    window.appState = {
      totalActivities,
      goalAchieved,
      goalNotAchieved
    };
  }, [totalActivities, goalAchieved, goalNotAchieved]);

  return (
    <div>
      <h1>Activities Analytics Dashboard</h1>
      <div data-testid="total-activities">{totalActivities}</div>
      <div data-testid="goal-achieved">{goalAchieved}</div>
      <div data-testid="goal-not-achieved">{goalNotAchieved}</div>
      <p>Total Steps: {totalSteps}</p>
      <p>Average Calories Burned: {averageCalories.toFixed(2)}</p>
    </div>
  );
};

export default Stats;