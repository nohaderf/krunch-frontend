import React from "react";

function Search({ search, onSearchChange }) {

  return (
    <div className="search-bar">
      <input
        className="search"
        type="text"
        id="search"
        placeholder="&#128270;  search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
