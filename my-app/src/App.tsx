import React from 'react';
import DataProvider from './context/Context';
import HomePage from './components/HomePage'

const App: React.FC = () => {
  return (
    <DataProvider>
        <HomePage />
    </DataProvider>
  );
}

export default App;
