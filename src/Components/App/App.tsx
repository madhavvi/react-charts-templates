import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../Utils/routes';
import Dashboard from '../Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Grid item container lg={12} md={12} sm={12} className="main-container">
            <Routes />
        </Grid>
      </Router>
    </div>
  );
}

export default App;
