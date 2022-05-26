import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './SectionPosts.css';
import Post from '../../Components/Post/Post';
import { fetchPosts } from './sectionPostsSlice';

export default function SectionPosts() {
  const posts = useSelector((state) => state.sectionPosts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts('/r/popular'));
  }, [dispatch]);
  //console.log(posts);

  if(posts === undefined) {
    return (
      <section className='posts'>
        <h2>Popular Posts</h2>
        <p><br/>Loading posts...</p>
      </section>
    );
  }

  return (
    <section className='posts'>
      <h2>Popular Posts</h2>
      {posts.length > 0 ? posts.map(post => {
        return(
        <Post
          post={post}
          key={post.id}
        />
      )}) : <p>Loading...</p>}
    </section>
  );
}