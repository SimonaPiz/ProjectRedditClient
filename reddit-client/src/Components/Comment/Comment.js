import './Comment.css';
import React from 'react';

import { convertDate } from '../../util/extra-functions';

export default function Comment({comment}) {
  //for load child comments
  let {replies} = comment;
  
  //function to load Comment children
  const loadChildren = (children) => {
    children.data.children.map(child => {
      return <Comment key={child.id} comment={child.data}/>; 
    })
  };
  
  return(
    <div className='commentComp'>
      <div className="userDiv">
        <div className="userIcon">
          <p>u/</p>
        </div>
        <p>{comment.author}</p>
      </div>
      <div className="commentContent">
        <div className="verticalLine">
          <svg width="20px" height="50">
            <line x1="10" y1="0" x2="10" y2="1000"/>
          </svg>
        </div>
        <div className="commentDetails">
          <p className='commentBody'>{comment.body}</p>
          <div className="commentFooter">
            <p>{convertDate(comment.created, true)}</p>
          </div>

          {replies && <button className='showAnswers'>{replies.data.children.length} answers</button>}
        </div>
      </div>
    </div>
  );
};