import Reddit from '../../util/reddit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Creo un'azione asincrona per recuperare i dati da Reddit api
export const fetchPostById = createAsyncThunk(
  'post/fetchPostById',
  async (url) => {
    const response = await Reddit.getPostById(url);
    return response;
  }
);

export const detailPostSlice = createSlice({
  name: 'post',
  initialState: {
    post: {},
    comments: [],
    isLoading: false
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.isLoading = false;
        let postComplete = action.payload[0].data.children[0].data;
        state.post = {
          subreddit: postComplete.subreddit,
          title: postComplete.title,
          name: postComplete.name,
          vote: postComplete['upvote_ratio'],
          ups: postComplete.ups,
          mediaSec: postComplete['secure_media_embed'],
          score: postComplete.score,
          created: postComplete.created,
          urlPost: postComplete['url_overridden_by_dest'],
          over18: postComplete['over_18'],
          subredditId: postComplete['subreddit_id'],
          id: postComplete.id,
          author: postComplete.author,
          numComments: postComplete['num_comments'],
          url: postComplete.url,
          media: postComplete.media
        };

        state.comments = action.payload[1].data.children.map(comment => {
          let {data} = comment;      
          return {
            subreddit: data.subreddit,
            replies: data.replies,
            id: data.id,
            author: data.author,
            created: data['created_utc'],
            parent: data['parent_id'],
            score: data.score,
            body: data.body,
            permalink: data.permalink        
          };
        });
      })
      .addCase(fetchPostById.rejected, (state) => {
        state.isLoading= false;
        state.post = {};
        state.comments = [];
      })

  },
});

//export const { setSubredditPost } = sectionPostsSlice.actions;

//export const selectPosts = (state) => state.sectionPosts.posts;
//export const selectSubreddits = (state) => state.sectionPosts.subredditPosts;

export default detailPostSlice.reducer;