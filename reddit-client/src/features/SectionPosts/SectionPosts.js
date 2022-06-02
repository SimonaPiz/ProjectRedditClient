import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './SectionPosts.css';
import Post from '../../Components/Post/Post';
import {  fetchPosts, fetchSubredditByName } from './sectionPostsSlice';

export default function SectionPosts() {
  const posts = useSelector((state) => state.sectionPosts.posts);
  const subreddits = useSelector((state) => state.sectionPosts.subredditPosts);
  const subIsLoad = useSelector((state) => state.sectionPosts.subIsLoad);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts('/r/popular'));     
  }, [dispatch]);

  useEffect(() => {
    for(let i=0; i<posts.length; i++) {
      let subName = posts[i].subreddit;
      dispatch(fetchSubredditByName(subName));
    };
  }, [posts]);
  
  if(posts === undefined) {
    return (
      <section className='posts'>
        <h2>Popular Posts</h2>
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
      <h2>Popular Posts</h2>
      {posts.length > 0 ? posts.map((post) => {
        return(
        <Post
          subreddit={subIsLoad ? 
            findSub(post.subreddit)
            : ''}
          post={post}
          key={post.id}
          id={post.id}
        />
      )}) : <p>Loading...</p>}
    </section>
  );
}