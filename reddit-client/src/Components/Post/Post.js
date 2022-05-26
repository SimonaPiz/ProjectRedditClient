import {Subreddit} from '../Subreddit/Subreddit';
import './Post.css';

export default function Post({post}) {
  if(post === undefined) {
    return;
  }

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

  const {title, media, created, author, numComments, subreddit, url} = post;
  
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
  //console.log(mediaKey, type);

  return(
    <div className='post'>
      <div className='postDetail'>
        <Subreddit subreddit={{name: subreddit, icon: ''}}/>
        <p>{created}</p>
      </div>
      <div className='postContent'>
        <h3>{title}</h3>
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
      <div className='postDetail'>
        <div className='comments'>
          <div className='iconComment'>
            <img src='./iconComment.svg' alt="" />
          </div>
          <p>{numComments} comments</p>
        </div>
        <p>u/{author}</p>
      </div>
    </div>
  );
}