import Reddit from '../../util/reddit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Creo un'azione asincrona per recuperare i dati da Reddit api
export const fetchSubredditByName = createAsyncThunk(
  'subreddit/fetchSubredditByName',
  async (subName) => {
    const response = await Reddit.getSubredditByName(subName);
    return response;
  }
);

export const detailSubredditSlice = createSlice({
  name: 'subreddit',
  initialState: {
    subreddit: {},
    isLoading: false
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubredditByName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubredditByName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subreddit = action.payload;
      })
      .addCase(fetchSubredditByName.rejected, (state) => {
        state.isLoading= false;
        state.subreddit = {};
      })

  },
});

//export const { setSubredditPost } = sectionPostsSlice.actions;

//export const selectPosts = (state) => state.sectionPosts.posts;
//export const selectSubreddits = (state) => state.sectionPosts.subredditPosts;

export default detailSubredditSlice.reducer;