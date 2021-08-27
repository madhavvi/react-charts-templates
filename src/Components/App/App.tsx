import React from 'react';
import './App.css';
import BarChart from '../BarChart/BarChart';
import BarLineChart from '../BarLineChart/BarLineChart';
import Dashboard from '../Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
        <Dashboard />
        {/* <BarChart />
        <BarLineChart /> */}
    </div>
  );
}

export default App;
