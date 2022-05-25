import Reddit from '../../util/reddit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//creo uno stato temporaneo
const subredditsData = [
  {title: 'subreddit1'},
  {title: 'subreddit2'},
  {title: 'subreddit3'},
  {title: 'subreddit4'},
  {title: 'subreddit5'}
];

//Creo un'azione asincrona per recuperare i dati da Reddit api
export const fetchSubreddits = createAsyncThunk(
  'sectionSubreddits/fetchSubreddits',
  async () => {
    const response = await Reddit.getSubreddits();
    return response;
  }
);

export const sectionSubredditsSlice = createSlice({
  name: 'sectioSubreddits',
  initialState: {
    subreddits: [],
    isLoading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subreddits = action.payload;
      })
      .addCase(fetchSubreddits.rejected, (state) => {
        state.isLoading= false;
        state.subreddits = [];
      })
  },
});

export const {loadSubreddits} = sectionSubredditsSlice.actions;

//export const selectSubreddits = (state) => state.subreddits;

export default sectionSubredditsSlice.reducer;