import './SearchBar.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { setSearchBar, clearSearchBar, selectSearchBar } from './searchBarSlice';

export default function SearchBar() {
  const searchTerm = useSelector(selectSearchBar);
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchBar(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchBar());
  };

  return (
    <div id='searchBar'>            
      <div id='searchContent'>
        <div>
          <img alt="" src='./search.svg'/>
        </div>
        <input 
          id="search"
          type="search"  
          name="searchTerm" 
          placeholder="Cerca su Reddit" 
          size='40'
          value={searchTerm}
          onChange={onSearchTermChangeHandler}
        />
        <button type="button" className='searchButton'>Search</button>

        {searchTerm.length > 0 && (
          <button className='searchButton'
            onClick={onClearSearchTermHandler}
            type="button"
          > 
            <img src='./clear.svg' alt="" />
          </button>
        )}
        
      </div>      
    </div>
  );
}