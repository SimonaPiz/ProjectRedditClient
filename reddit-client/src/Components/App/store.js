import {configureStore} from '@reduxjs/toolkit';
//importare i reducer dalle slice features
import sectionSubredditsReducer from '../../features/SectionSubreddits/SectionSubredditsSlice';
import searchBarReducer from '../../features/SearchBar/searchBarSlice';
import sectionPostsReducer from '../../features/SectionPosts/sectionPostsSlice';
import detailSubredditReducer from '../../features/DetailSubreddit/detailSubredditSlice'; 
import detailPostReducer from '../../features/DetailPost/detailPostSlice';

export const store = configureStore({
  reducer: {    //elenco reducer delle slice
    searchBar: searchBarReducer,
    sectionSubreddits: sectionSubredditsReducer,
    sectionPosts: sectionPostsReducer,
    detailSubreddit: detailSubredditReducer,
    detailPost: detailPostReducer,
  },
});
