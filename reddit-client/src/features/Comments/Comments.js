import React from "react";
import './Comments.css';

export default function Comments () {
  return (
    <section className="commentsSection">
      <h2>Comments</h2>
      <svg width="100%" height="10px">
        <line x1="0" y1="5" x2="900" y2="5"/>
      </svg>
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
        </div>
      </div>
    </section>
  );
};