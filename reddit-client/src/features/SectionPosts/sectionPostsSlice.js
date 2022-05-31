import Reddit from '../../util/reddit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Creo un'azione asincrona per recuperare i dati da Reddit api
export const fetchPosts = createAsyncThunk(
  'sectionPosts/fetchPosts',
  async (subreddit) => {
    const response = await Reddit.getSubredditPosts(subreddit);
    return response;
  }
);

export const fetchSubredditByName = createAsyncThunk(
  'sectionPosts/fetchSubredditByName',
  async (subName) => {
    const response = await Reddit.getSubredditByName(subName);
    return response;
  }
);

export const sectionPostsSlice = createSlice({
  name: 'sectionPosts',
  initialState: {
    posts: [],
    subredditPosts: [],
    isLoading: false
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading= false;
        state.posts = [];
      })

      .addCase(fetchSubredditByName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubredditByName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subredditPosts.push(action.payload);
      })
      .addCase(fetchSubredditByName.rejected, (state) => {
        state.isLoading= false;
      })

  },
});

export const { setSubredditPost } = sectionPostsSlice.actions;

//export const selectPosts = (state) => state.sectionPosts.posts;
//export const selectSubreddits = (state) => state.sectionPosts.subredditPosts;

export default sectionPostsSlice.reducer;