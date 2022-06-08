import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';

import './DetailPost.css';
import Post from '../../Components/Post/Post';
import Comments from '../Comments/Comments';
import {  fetchPostById } from './detailPostSlice';

export default function DetailPost() {
  const postStatic = {
    title: 'Post Title - I saw something amazing on this trip', 
    media: null, 
    created: 1654072819, 
    author: 'user', 
    numComments: 657, 
    url: './ex-mediaPost.jpg'
  };

  const subreddit = useSelector((state) => state.detailSubreddit.subreddit);
  const post = useSelector((state) => state.detailPost.post);
  const comments = useSelector((state) => state.detailPost.comments);
  const dispatch = useDispatch();
  let {url} = useRouteMatch();
  //console.log(postId);

  useEffect(() => { 
    dispatch(fetchPostById(url));
  }, [dispatch]);

  return ( !post ? 
    <p>post loading...</p>
    :
    <section className='postDetail'>
      <h2>Post details</h2>
      <div id='sectionPostDetails'>
        <Post 
          className='postDiv'
          subreddit={subreddit}
          post={post}
          key={post.id}
          id={post.id}
          linkSub={false}
        />        
        <Comments />
      </div>
    </section>
  );
}