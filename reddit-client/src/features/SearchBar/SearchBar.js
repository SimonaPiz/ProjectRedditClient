import './SearchBar.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { setSearchBar } from './searchBarSlice';

export default function SearchBar() {
  const searchTerm = useSelector((state) => state.searchBar.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchBar(userInput));
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
          <a href={`/search/?q=${searchTerm}`}>Search</a>
        </button>       
      </div>      
    </div>
  );
}