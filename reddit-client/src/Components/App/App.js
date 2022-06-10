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
          {/*----page subreddit r/:subreddit/comments/ ------*/}
          <Switch>
            <Route path='/r/:subreddit/comments/:postId'>
              {/*when click on a post or a subreddit, load a single subreddit */}
              <DetailSubreddit />
              {/*when click on a post, load specific post details */}
              <DetailPost />                              
            </Route>       

          {/*----page subreddit r/ ------*/}
            <Route path='/r/:subreddit'>
              {/*when click on a post or a subreddit, load a single subreddit */}
              <DetailSubreddit />
                
              {/*when click on a subreddit, load specific posts */}
              <SectionPosts />               
            </Route>          

            {/*-------- homepage ----------*/}
            <Route exact path='/'>
              {/*when app starts, loading a default list of subreddits */}
              <SectionSubreddits/>
              {/*when app starts loading popular posts */}
              <SectionPosts />
            </Route>
          </Switch>      
        </main>        
      </div>
    </Router>
  );
}

export default App;
