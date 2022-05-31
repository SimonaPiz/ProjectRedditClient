import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//importare i componenti
import NavBar from '../NavBar/NavBar';
import Homepage from '../HomePage.js/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route path='/'>
          <Homepage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
