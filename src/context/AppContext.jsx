import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { appReducer, initialState } from '../reducer/AppReducer';
import { getToken, getData } from '../services/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('App loading - fetching token...');
        const token = await getToken();
        console.log('Token received:', token);
        
        const data = await getData(token);
        console.log('Raw data received:', data);
        
        // Handle different response formats
        const activities = Array.isArray(data) ? data : data.activities || data.data || [];
        console.log('Processing activities:', activities);
        
        dispatch({ type: 'LOAD_DATA', payload: activities });
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };
    loadData();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};