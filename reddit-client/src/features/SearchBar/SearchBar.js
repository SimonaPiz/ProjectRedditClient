import './SearchBar.css';

export default function SearchBar() {
  return (
    <div id='searchBar'>            
      <form action="/search/" id='searchContent' autocomplete="off" method='get' role="search">
        <div>
          <img alt="" src='./iconSearch.svg'/>
        </div>
        <input type="search"  name="searchTerm" placeholder="Cerca su Reddit" value="" size='40'/>
        <button className='searchButton'>Search</button>
      </form>      
    </div>
  );
}