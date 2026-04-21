import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const Filter = () => {
  const { state } = useApp();
  const [filterType, setFilterType] = useState('all'); // 'all', 'achieved', 'notAchieved'

  // Q3: Filter activities
  const filteredActivities = state.activities.filter(activity => {
    if (filterType === 'achieved') return activity.goalAchieved;
    if (filterType === 'notAchieved') return !activity.goalAchieved;
    return true;
  });

  return (
    <div>
      <h1>Filter Activities</h1>
      <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
        <option value="all">All</option>
        <option value="achieved">Goal Achieved</option>
        <option value="notAchieved">Goal Not Achieved</option>
      </select>
      <ul>
        {filteredActivities.map(activity => (
          <li key={activity.activityId} data-testid="activity-item">
            {activity.name || 'Unknown'} - {activity.goalAchieved ? 'Achieved' : 'Not Achieved'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;