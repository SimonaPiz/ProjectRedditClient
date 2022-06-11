import Reddit from '../../util/reddit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Creo un'azione asincrona per recuperare i dati da Reddit api
export const fetchSubreddits = createAsyncThunk(
  'sectionSubreddits/fetchSubreddits',
  async (type) => {
    const response = await Reddit.getSubreddits(type);
    return response;
  }
);

//Creo un'azione asincrona per recuperare i dati di ricerca da Reddit api
export const fetchSubSearchResults = createAsyncThunk(
  'sectionSubreddits/fetchSubSearchResults',
  async (searchTerm) => {
    const response = await Reddit.getSubSearchResults(searchTerm);
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

      .addCase(fetchSubSearchResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subreddits = action.payload;
      })
      .addCase(fetchSubSearchResults.rejected, (state) => {
        state.isLoading= false;
        state.subreddits = [];
      })
  },
});

//export const {} = sectionSubredditsSlice.actions;

//export const selectSubreddits = (state) => state.subreddits;

export default sectionSubredditsSlice.reducer;