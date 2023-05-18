import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {Subreddit} from '../../Components/Subreddit/Subreddit';
import './SectionSubreddits.css';
import { fetchSubreddits, fetchSubSearchResults } from './SectionSubredditsSlice';

export default function SectionSubreddits() {
  const subreddits = useSelector((state) => state.sectionSubreddits.subreddits);
  const dispatch = useDispatch();
  const [ active, setActive] = useState(false); //for responsive mobile

  let { search } = useLocation();       //import param from url (if it is /search/?q=:searchTerm)

  useEffect(() => {
    if(search) {
      dispatch(fetchSubSearchResults(search));
    } else {
      dispatch(fetchSubreddits('default'));
    }
  }, [dispatch, search]);
  //console.log(subreddits);

  const handleClick = (e) => {
    if(!active){
      setActive(true);
    } else {
      setActive(false);
    };    
  };

  return (
    <section className='subreddits'>
      <button className={active ? 'active' : undefined} onClick={(e) => handleClick(e)}>
        <h2>{search ? 'Subreddits include: ' + search.replace('?q=', '') : 'Subreddits'}</h2>
      </button>
      <svg width="100%" height="10px" className={active ? 'active' : undefined}>
        <line x1="0" y1="5" x2="900" y2="5"/>
      </svg>
      <ul className={active ? 'active' : undefined}>
        {subreddits.length > 0 ? subreddits.map((subreddit) => {
          return (
          <li>
            <a href={'/r/'+ subreddit.name}>
            <Subreddit 
              subreddit={subreddit} 
              key={subreddit.id}
              className="subreddit" 
            />
            </a>
          </li>
          )
        }) : <li>Loading...</li>}
      </ul>
    </section>
  );
}