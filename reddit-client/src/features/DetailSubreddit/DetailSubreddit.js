import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {Subreddit} from '../../Components/Subreddit/Subreddit';
import './DetailSubreddit.css';
//import { fetchSubreddits } from './SectionSubredditsSlice';

export default function SectionSubreddits() {
  /*const subreddit = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubreddits('default'));
  }, [dispatch]);*/
  //console.log(subreddits);

  return (
    <section className='subredditDetail'>
      <Subreddit 
        subreddit={''} 
        key={''}
        className="subreddit" 
      />
      <div className='subDescription'>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
      <p className='subMembers'>1,4 m</p>
      <p className='subCreatedDate'>creato il 27 maggio 2019</p>      
    </section>
  );
}