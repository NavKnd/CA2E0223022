import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { appReducer, initialState } from '../reducer/AppReducer';
import { getToken, getData } from '../services/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const loadData = async () => {
      try {
        const token = await getToken();
        const data = await getData(token);
        dispatch({ type: 'LOAD_DATA', payload: data });
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