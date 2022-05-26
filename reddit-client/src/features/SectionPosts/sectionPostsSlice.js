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

export const sectionPostsSlice = createSlice({
  name: 'sectionPosts',
  initialState: {
    posts: [],
    isLoading: false
  },
  reducers: {},
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
  },
});

//export const {} = sectionPostsSlice.actions;

//export const selectPosts = (state) => state.posts;

export default sectionPostsSlice.reducer;