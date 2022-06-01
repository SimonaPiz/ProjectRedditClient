import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//importare i componenti
import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage.js/HomePage';
import PostDetailPage from '../PostDetailPage/PostDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>        
          <Route path='/post-detail'>
            <PostDetailPage />
          </Route>

          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
