import './Subreddit.css';
import React from 'react';

export function Subreddit ({subreddit}) {
  //console.log(subreddit);
  if (!subreddit) {
    return (
      <div className='subreddit'>
        <div className='iconSubreddit'>
          <p>r/</p>
        </div>
        <p>r/example title</p>
      </div>
    );
  }
  const { name, icon, color } = subreddit;
  return (
    <div className='subreddit'>
      <div className='iconSubreddit' style={{backgroundColor: color}}> 
        {icon !== "" ?       
          <img src={icon} alt=""/>
        : <p data-testid='emptyIcon'>r/</p>
        }
      </div>
      <p>r/{name}</p>
    </div>
  );
}