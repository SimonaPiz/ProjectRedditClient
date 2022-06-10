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

  const handleClick = () => {

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
        <button 
          type="button" 
          className='searchButton'
        >
          <a href='/search/'>Search</a>
        </button>       
      </div>      
    </div>
  );
}