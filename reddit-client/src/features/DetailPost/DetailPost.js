import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './DetailPost.css';
import Post from '../../Components/Post/Post';
import Comments from '../Comments/Comments';
//import {  fetchPosts, fetchSubredditByName } from './sectionPostsSlice';

export default function DetailPost() {
  const postStatic = {
    title: 'Post Title - I saw something amazing on this trip', 
    media: null, 
    created: 1654072819, 
    author: 'user', 
    numComments: 657, 
    url: './ex-mediaPost.jpg'
  };

  /*const posts = useSelector((state) => state.sectionPosts.posts);
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
      for (let i=0; i<posts.length; i++) {
        if(subreddits[i] !== undefined && subreddits[i].name === postSub){
          return subreddits[i];
        };
      };
    return '';
  }*/

  return (
    <section className='postDetail'>
      <h2>Post details</h2>
      <div id='sectionPostDetails'>
        <Post 
          className='postDiv'
          post={postStatic}
        />        
        <Comments />
      </div>
    </section>
  );
}