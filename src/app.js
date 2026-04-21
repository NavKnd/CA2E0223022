import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <Link to="/activities" style={{ marginRight: '20px' }}>Activities</Link>
          <Link to="/filter" style={{ marginRight: '20px' }}>Filter</Link>
          <Link to="/stats">Stats</Link>
        </nav>
        <AppRouter />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;