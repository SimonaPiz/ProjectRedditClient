import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {Subreddit} from '../../Components/Subreddit/Subreddit';
import './SectionSubreddits.css';
import { loadSubreddits, selectSubreddits } from './SectionSubredditsSlice';

export default function SectionSubreddits() {
  const subreddits = useSelector((state) => state.sectionSubreddits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSubreddits());
  }, [dispatch]);
  //console.log(subreddits);

  return (
    <section className='subreddits'>
      <h2>Subreddits</h2>
      <svg width="100%" height="10px">
        <line x1="0" y1="5" x2="900" y2="5"/>
      </svg>
      <ul>
        {subreddits.length > 0 ? subreddits.map((subreddit, index) => {
          return (
          <li>
            <Subreddit 
              subreddit={subreddit} 
              key={index}
              className="subreddit" 
            />
          </li>
          )
        }) : <li>Loading...</li>}
      </ul>
    </section>
  );
}