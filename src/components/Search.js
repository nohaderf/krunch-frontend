import React from "react";

function Search({ search, onSearchChange }) {

  return (
    <div className="search-bar">
      <label htmlFor="search">Search </label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
