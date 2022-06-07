import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//importare i componenti
import NavBar from '../NavBar/NavBar';
import DetailSubreddit from '../../features/DetailSubreddit/DetailSubreddit';
import SectionSubreddits from '../../features/SectionSubreddits/SectionSubreddits';
import DetailPost from '../../features/DetailPost/DetailPost';
import SectionPosts from '../../features/SectionPosts/SectionPosts';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <main>
          {/*----Section left: Subreddits------*/}
          <Switch>
            {/*when click on a post or a subreddit, load a single subreddit */}
            <Route path='/r/:subreddit?'>
              <DetailSubreddit />
            </Route>

            {/*when app starts, loading a default list of subreddits */}
            <Route exact path='/'>
              <SectionSubreddits/>
            </Route>            
          </Switch>

          {/*----Section right: Posts------*/}
          <Switch>
            {/*when click on a post, load post details and its comments*/}
            <Route path='/r/:subreddit/comments/:postId'>
              <DetailPost />
            </Route>

            {/*when click on a subreddit, load specific posts */}
            <Route path='/r/:subreddit?'>
              <SectionPosts />       
            </Route>

            {/*when app starts loading popular posts */}
            <Route exact path='/'>
              <SectionPosts />
            </Route>
          </Switch>      
        </main>        
      </div>
    </Router>
  );
}

export default App;
