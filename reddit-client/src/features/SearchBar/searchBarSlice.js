const initialState = "";

export const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'searchBar/setSearchBar':
      return action.payload;
    case 'searchBar/clearSearchBar':
      return '';
    default:
      return state;
  }
}

export function setSearchBar(term) {
  return {
    type: 'searchBar/setSearchBar',
    payload: term
  }
}

export function clearSearchBar() {
  return {
    type: 'searchBar/clearSearchBar'
  }
}

export const selectSearchBar = (state) => state.searchBar;