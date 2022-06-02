import './Comment.css';
import React from 'react';

export default function Comment() {
  let hasChild = true;

  const childComment = (hasChild = false, child) => {
    
    return(
      <div>
        <div className="userDiv">
          <div className="userIcon">
            <p>u/</p>
          </div>
          <p>u/user name</p>
        </div>
        <div className="commentContent">
          <div className="verticalLine">
            <svg width="20px" height="50">
              <line x1="10" y1="0" x2="10" y2="1000"/>
            </svg>
          </div>
          <div className="commentDetails">
            <p>If this is true, that would mean that they can see the ending before it begins, which explains why nobody else managed to pull it off.</p>
            <div className="commentFooter">
              <p>Month 10, 2020</p>
            </div>

            {hasChild && childComment() }
          </div>
        </div>
      </div>
    );
  };

  return(
    <div>
      <div className="userDiv">
        <div className="userIcon">
          <p>u/</p>
        </div>
        <p>u/user name</p>
      </div>
      <div className="commentContent">
        <div className="verticalLine">
          <svg width="20px" height="50">
            <line x1="10" y1="0" x2="10" y2="1000"/>
          </svg>
        </div>
        <div className="commentDetails">
          <p>If this is true, that would mean that they can see the ending before it begins, which explains why nobody else managed to pull it off.</p>
          <div className="commentFooter">
            <p>Month 10, 2020</p>
          </div>

          {hasChild && childComment() }
        </div>
      </div>
    </div>
  );
};