import './Comment.css';
import React, { useState } from 'react';

import { convertDate } from '../../util/extra-functions';

export default function Comment({comment}) {
  //for load child comments
  let {replies} = comment;
  const [childrenCom, setChildrenCom] = useState(null);
  const [ showChildren, setShowChildren ] = useState(false);
  
  //function to load Comment children when click on button "answers"
  const handleClick = (e) => {
    console.log(replies.kind);
    if(!showChildren) {
      setShowChildren(true);
      setChildrenCom(replies.data.children);
    } else {
      setShowChildren(false);
      setChildrenCom(null);
    }
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
            <line x1="10" y1="0" x2="10" y2={"10000"}/>
          </svg>
        </div>
        <div className="commentDetails">
          <p className='commentBody'>{comment.body}</p>
          <div className="commentFooter">
            <p>{convertDate(comment.created, true)}</p>
          </div>

          {replies && <button 
            className='showAnswers'
            type='button'
            onClick={(e) => handleClick(e)}
          >
            {showChildren ? 'reduce answers' : (replies.data.children.length + ' answers')}
          </button>
          }
          {childrenCom && childrenCom.map(child => {
            return (child.kind !== "more" ?
              <Comment id={child.data.id} key={child.data.id} comment={child.data}/>
            :
              <button 
                type='button' 
                className='moreComments'
              >and more...</button>
            )
          })}
        </div>
      </div>
    </div>
  );
};