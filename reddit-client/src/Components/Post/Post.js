import React from 'react';

import {Subreddit} from '../Subreddit/Subreddit';
import './Post.css';
import { convertDate, convertToK } from '../../util/extra-functions';

export default function Post({post, subreddit, linkSub}) {
  if(post === undefined) {
    return (<p>Loading...</p>);
  }

  //-------------per verificare il tipo di media del post
  const findMediaKey = () => {
    if(post.media !== null){
      return Object.keys(post.media);
    }
    return [null];
  };
  const mediaKey = findMediaKey();

  if(mediaKey[0] !== 'reddit_video' && mediaKey[0] !== null){
    return;
  } 

  //destrutturo le propietà del post che ci servono
  const {
    title, 
    media, 
    created, 
    author, 
    numComments, 
    url
  } = post;
  
  const getType = url => {
    if(media !== null) {
      return 'video';
    } else if((/\.jpg/).test(url) || 
        (/\.gif/).test(url) || 
        (/\.jpeg/).test(url) ||
        (/\.png/).test(url)) {
      return 'img';
    } else {
      return 'link';
    }
  };
  const type = getType(url);
  
  return(
    <div className='post'>
      <div className='postDetails'>
        {!linkSub ? 
          <Subreddit subreddit={subreddit}/>
        :
          <a href={'/r/'+ subreddit.name}>
            <Subreddit subreddit={subreddit}/>
          </a>
        }
        <p>{convertDate(created)}</p>
      </div>
      <div className='postContent'>
        <a href={'/r/'+ subreddit.name + '/comments/' + post.id}>
          <h3>{title}</h3>
        </a>
        <div className='postMedia'>
          {media === null ? 
            (type === 'img' ?
              <img src={url} alt="" />
              :
              <a href={url}>see article -{'>'}</a>
            )            
          : 
            <video controls>
              <source src={media['reddit_video']['fallback_url']} type='video/mp4'/>
              <source src={media['reddit_video']['fallback_url']} type='video/webm'/>
              <p>Video is not supported</p>
            </video> 
          }
        </div>
      </div>
      
      <div className='postDetails'>
        <div className='comments'>
          <div className='iconComment'>
            <img src='./iconComment.svg' alt="" />
          </div>
          <p>{convertToK(numComments)} comments</p>
        </div>
        <p>u/{author}</p>
      </div>
    </div>
  );
}