import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {Subreddit} from '../../Components/Subreddit/Subreddit';
import './DetailSubreddit.css';
import { fetchSubredditByName } from './detailSubredditSlice';
import { convertToK, convertDate } from '../../util/extra-functions';

export default function DetailSubreddit() {
  const subObj = useSelector((state) => state.detailSubreddit.subreddit);
  const dispatch = useDispatch();
  let {subreddit} = useParams();
    
  useEffect(() => {
    dispatch(fetchSubredditByName(subreddit));
  }, [subreddit, dispatch]);
  //console.log(subreddit); 
   

  return (
    <section 
      className='subredditDetail' 
      style={subObj.color !== (""||''||undefined||null) && { background: `linear-gradient(135deg, ${subObj.color} 7%, 7%, white 93%, 93%, ${subObj.color} 100%)`}}
    >      
      <Subreddit 
        subreddit= {subObj}
        key={subObj.id}
        className="subreddit" 
      />        
      <div className='subDescription'>
        <p>{subObj.description}</p>
      </div>
      <p className='subMembers'><span>Members: </span>{convertToK(subObj.subscribers)}</p>
      <div className='headerSub'>
        {subObj.headerImg && (
          <img src={subObj.headerImg} alt=''/>
        )}
      </div>
      <svg width="100%" height="10px">
        <line x1="0" y1="5" x2="900" y2="5"/>
      </svg>
      <p className='subCreatedDate'>Created at: {convertDate(subObj.created, false)}</p>      
    </section>
  );
}