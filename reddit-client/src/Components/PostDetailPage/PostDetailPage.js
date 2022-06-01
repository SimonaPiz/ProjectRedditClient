import React from "react";

import DetailSubreddit from "../../features/DetailSubreddit/DetailSubreddit";
import DetailPost from "../../features/DetailPost/DetailPost";

export default function PostDetail () {
  return (
    <main id="postdetailpage">
      <DetailSubreddit />
      <DetailPost />     
    </main>
  );
};