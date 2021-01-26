import React from "react";

function Search({ search, onSearchChange }) {

  return (
    <div>
      <div className="search-bar">
      <input
        className="search"
        type="text"
        autocomplete="off"
        id="search"
        placeholder="  search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <span className="search-icon"> <i class="fas fa-search"></i></span>
    </div>
    </div>
    
  );
}


export default Search;

