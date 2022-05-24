import './Subreddit.css';
import React from 'react';

export function Subreddit ({subreddit}) {
  //console.log(subreddit);
  return (
    <div className='subreddit'>
      <div className='iconSubreddit'></div>
      <p>r/{subreddit !== undefined ? subreddit.title : 'non trovato'}</p>
    </div>
  );
}