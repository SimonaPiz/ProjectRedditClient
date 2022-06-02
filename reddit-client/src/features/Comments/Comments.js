import React from "react";
import Comment from "../../Components/Comment/Comment";
import './Comments.css';

export default function Comments () {
  return (
    <section className="commentsSection">
      <h2>Comments</h2>
      <svg width="100%" height="10px">
        <line x1="0" y1="5" x2="900" y2="5"/>
      </svg>
      <Comment />
    </section>
  );
};