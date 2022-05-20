import Subreddit from '../Subreddit/Subreddit';
import './Post.css';

export default function Post() {
  return(
    <div className='post'>
      <div className='postDetail'>
        <Subreddit/>
        <p>Month 10, 2021</p>
      </div>
      <div className='postContent'>
        <h3>Post Title - I saw something amazing on this trip</h3>
        <div className='postMedia'>
          <img src='./ex-mediaPost.jpg' alt=""/>
        </div>
      </div>
      <div className='postDetail'>
        <div className='comments'>
          <div className='iconComment'>
            <img src='./iconComment.svg' alt="" />
          </div>
          <p>4.5k comments</p>
        </div>
        <p>u/user</p>
      </div>
    </div>
  );
}