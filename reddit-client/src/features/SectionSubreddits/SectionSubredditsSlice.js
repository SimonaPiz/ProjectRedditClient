
import { createSlice } from '@reduxjs/toolkit';

//creo uno stato temporaneo
const subredditsData = [
  {title: 'subreddit1'},
  {title: 'subreddit2'},
  {title: 'subreddit3'},
  {title: 'subreddit4'},
  {title: 'subreddit5'}
];

export const sectionSubredditsSlice = createSlice({
  name: 'sectioSubreddits',
  initialState: [],
  reducers: {
    loadSubreddits: (state, action) => {
      return subredditsData;
    }
  }
});

export const {loadSubreddits} = sectionSubredditsSlice.actions;

//export const selectSubreddits = (state) => state.subreddits;

export default sectionSubredditsSlice.reducer;