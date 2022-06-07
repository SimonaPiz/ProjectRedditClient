import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {Subreddit} from '../../Components/Subreddit/Subreddit';
import './SectionSubreddits.css';
import { fetchSubreddits } from './SectionSubredditsSlice';

export default function SectionSubreddits() {
  const subreddits = useSelector((state) => state.sectionSubreddits.subreddits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubreddits('default'));
  }, [dispatch]);
  //console.log(subreddits);

  return (
    <section className='subreddits'>
      <h2>Subreddits</h2>
      <svg width="100%" height="10px">
        <line x1="0" y1="5" x2="900" y2="5"/>
      </svg>
      <ul>
        {subreddits.length > 0 ? subreddits.map((subreddit) => {
          return (
          <li>
            <Link to={'r/'+ subreddit.name}>
            <Subreddit 
              subreddit={subreddit} 
              key={subreddit.id}
              className="subreddit" 
            />
            </Link>
          </li>
          )
        }) : <li>Loading...</li>}
      </ul>
    </section>
  );
}