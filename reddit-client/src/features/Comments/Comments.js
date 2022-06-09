import React from "react";
import Comment from "../../Components/Comment/Comment";
import './Comments.css';

export default function Comments ({comments}) {
  return (
    <section className="commentsSection">
      <h2>Comments</h2>
      <svg width="100%" height="10px">
        <line x1="0" y1="5" x2="900" y2="5"/>
      </svg>
      {comments.length > 0 ?
        comments.map(comment => {
          return (comment ?
            <Comment 
              key={comment.id}
              id={comment.id}
              comment={comment}
            />
            :
            <p style={{padding: '20px 0 0 10px', fontSize: '14px'}}>and more...</p>
          )
        }) 
      :
        <p>Loading...</p>
      }
    </section>
  );
};