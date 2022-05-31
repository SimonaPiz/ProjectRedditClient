import {createSlice} from '@reduxjs/toolkit';

const options = {
  name: 'searchBar',
  initialState: '',
  reducers: {
    setSearchBar: (state, action) => {
      return action.payload;
    },
    clearSearchBar: (state, action) => {
      return '';
    }
  }
};

export const searchBarSlice = createSlice(options);

export const {setSearchBar, clearSearchBar} = searchBarSlice.actions;

export const selectSearchBar = (state) => state.searchBar;

export default searchBarSlice.reducer;