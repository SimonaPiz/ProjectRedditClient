import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//importare i componenti
import NavBar from '../NavBar/NavBar';
import SectionPosts from '../../features/SectionPosts/SectionPosts';
import SectionSubreddits from '../../features/SectionSubreddits/SectionSubreddits';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <main>
          <SectionSubreddits/>
          <SectionPosts/>
        </main>
      </div>
    </Router>
  );
}

export default App;
