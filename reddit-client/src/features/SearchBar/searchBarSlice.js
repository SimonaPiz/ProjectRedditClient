import {createSlice} from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: {
    searchTerm: '',
  },
  reducers: {
    setSearchBar: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchBar: (state) => {
      state.searchTerm = '';
    }
  },
});

export const {setSearchBar, clearSearchBar} = searchBarSlice.actions;

export default searchBarSlice.reducer;