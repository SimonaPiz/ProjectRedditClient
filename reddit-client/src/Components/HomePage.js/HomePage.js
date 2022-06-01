import React from "react";

import SectionSubreddits from '../../features/SectionSubreddits/SectionSubreddits';
import SectionPosts from '../../features/SectionPosts/SectionPosts';

export default function HomePage() {
  return (
    <main id='homepage'>
      <SectionSubreddits/>
      <SectionPosts/>
    </main>
  );
};