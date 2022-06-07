import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import './SectionPosts.css';
import Post from '../../Components/Post/Post';
import {  fetchPosts, fetchSubredditByName } from './sectionPostsSlice';

export default function SectionPosts() {
  const posts = useSelector((state) => state.sectionPosts.posts);
  const subreddits = useSelector((state) => state.sectionPosts.subredditPosts);
  const subIsLoad = useSelector((state) => state.sectionPosts.subIsLoad);
  const subObj = useSelector((state) => state.detailSubreddit.subreddit);
  const dispatch = useDispatch();
  let { subreddit } = useParams();
  let linkActive = true;
  //console.log(subreddit);
  if(subreddit) {
    linkActive = false;
  }
  
  useEffect(() => {
    if(subreddit) {
      dispatch(fetchPosts('/r/' + subreddit));
    } else {
      dispatch(fetchPosts('/r/popular'));
    }    
  }, [dispatch, subreddit]);

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
      <h2>{!subreddit ? 'Popular Posts' : 'Posts'}</h2>
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