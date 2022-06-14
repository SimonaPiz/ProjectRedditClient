import './SearchBar.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

<<<<<<< HEAD
import { setSearchBar, selectSearchBar } from './searchBarSlice';
=======
import { setSearchBar } from './searchBarSlice';
>>>>>>> cc62f53a5d4afcd6a18b28e28011b6f02c9017ea

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