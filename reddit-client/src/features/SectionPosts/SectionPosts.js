import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './SectionPosts.css';
import Post from '../../Components/Post/Post';
import {  fetchPosts, fetchSubredditByName } from './sectionPostsSlice';

export default function SectionPosts() {
  const posts = useSelector((state) => state.sectionPosts.posts);
  const subreddits = useSelector((state) => state.sectionPosts.subredditPosts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts('/r/popular'));     
  }, [dispatch]);

  useEffect(() => {
    for(let i=0; i<posts.length; i++) {
      let subName = posts[i].subreddit;
      dispatch(fetchSubredditByName(subName));
    };
  }, []);
  
  if(posts === undefined) {
    return (
      <section className='posts'>
        <h2>Popular Posts</h2>
        <p><br/>Loading posts...</p>
      </section>
    );
  };

  const findSub = (postSub) => {
    if (subreddits.length > 0) {
      for (let i=0; i<posts.length; i++) {
        if(subreddits[i].name == postSub){
          return subreddits[i];
        };
      };
    }
    return '';
  }

  return (
    <section className='posts'>
      <h2>Popular Posts</h2>
      {posts.length > 0 ? posts.map((post) => {
        return(
        <Post
          subreddit={findSub(post.subreddit)}
          post={post}
          key={post.id}
          id={post.id}
        />
      )}) : <p>Loading...</p>}
    </section>
  );
}