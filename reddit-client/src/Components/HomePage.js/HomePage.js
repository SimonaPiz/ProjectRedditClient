import './HomePage.css';
import React from "react";

import SectionSubreddits from '../../features/SectionSubreddits/SectionSubreddits';
import SectionPosts from '../../features/SectionPosts/SectionPosts';

export default function Homepage() {
  return (
    <main>
      <SectionSubreddits/>
      <SectionPosts/>
    </main>
  );
};