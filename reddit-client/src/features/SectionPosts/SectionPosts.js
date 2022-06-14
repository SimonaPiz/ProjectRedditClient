import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import './SectionPosts.css';
import Post from '../../Components/Post/Post';
import {  fetchPosts, fetchSubredditByName, fetchSearchResults } from './sectionPostsSlice';

export default function SectionPosts() {
  const posts = useSelector((state) => state.sectionPosts.posts);
  const subreddits = useSelector((state) => state.sectionPosts.subredditPosts);
  const subIsLoad = useSelector((state) => state.sectionPosts.subIsLoad);
  const subObj = useSelector((state) => state.detailSubreddit.subreddit);
  const dispatch = useDispatch();
  
  let { subreddit } = useParams();    //import param from url (if it is /r/:subreddit)
  let { search } = useLocation();       //import param from url (if it is /search/?q=:searchTerm)
  let linkActive = true;    //per attivare/disattivare il link alla subreddit

  if(subreddit) {
    linkActive = false;
  }
  
  useEffect(() => {
    if(subreddit) {
      dispatch(fetchPosts('/r/' + subreddit));
    } else if (search) {      
      dispatch(fetchSearchResults(search));
    } else {
      dispatch(fetchPosts('/r/popular'));
    }    
  }, [dispatch, subreddit, search]);

  useEffect(() => {
    if(!subreddit){
      for(let i=0; i<posts.length; i++) {
        let subName = posts[i].subreddit;
        dispatch(fetchSubredditByName(subName));
      };
    }
  }, [posts, subreddit, dispatch]);
  
  if(posts === undefined) {
    return (
      <section className='posts'>
        <h2>Posts</h2>
        <p><br/>Loading posts...</p>
      </section>
    );
  };

  const findSub = (postSub) => {
    let subResult = '';
      for (let i=0; i<posts.length; i++) {
        if(subreddits[i] !== undefined && subreddits[i].name === postSub){
          subResult = subreddits[i];
          break;
        };
      };
    return subResult;
  }

  return (
    <section className='posts'>
      <h2>{!subreddit ? (search ? 'Posts include: ' + search.replace('?q=', '') : 'Popular Posts') : 'Posts'}</h2>
      {posts.length > 0 ? posts.map((post) => {
        return(
        <Post
          subreddit={subIsLoad ? 
            findSub(post.subreddit)
            : subObj}
          post={post}
          key={post.id}
          id={post.id}
          linkSub={linkActive}
        />
      )}) : <p>Loading...</p>}
    </section>
  );
}