import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import './DetailPost.css';
import Post from '../../Components/Post/Post';
import Comments from '../Comments/Comments';
import {  fetchPostById } from './detailPostSlice';

export default function DetailPost() {
  const postStatic = {
    title: 'Loading...', 
    media: null, 
    created: 1654072819, 
    author: 'user', 
    numComments: 657, 
    url: ''
  };

  const subreddit = useSelector((state) => state.detailSubreddit.subreddit);
  const post = useSelector((state) => state.detailPost.post);
  const comments = useSelector((state) => state.detailPost.comments);
  let isComplete = useSelector((state) => state.detailPost.isComplete);
  const dispatch = useDispatch();
  let {url} = useRouteMatch();
  //console.log(isComplete);

  useEffect(() => { 
    dispatch(fetchPostById(url));
  }, [dispatch, url]);

  return ( 
    <section className='postDetail'>
      <h2>Post details</h2>
      <div id='sectionPostDetails'>
      {!isComplete ? 
        <Post 
          className='postDiv'
          subreddit={subreddit}
          post={postStatic}
          key=''
          id=''
          linkSub={false}
        />
        :
        <Post 
          className='postDiv'
          subreddit={subreddit}
          post={post}
          key={post.id}
          id={post.id}
          linkSub={false}
        />
      }        
        <Comments 
          id={post.id}
          comments= {comments}
        />
      </div>
    </section>
  );
}