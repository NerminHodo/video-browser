import React from "react";
import "../css/SearchBar.css";

function SearchBar({searchTerm, setSearchTerm, searchYT }) {

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchYT();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="ui action left icon input ui-c">
        <i className="search icon"></i>
        <input id="searchBar"
          onChange={handleChange}
          className="prompt"
          type="text"
          placeholder="Video Browser"
          value={searchTerm}
        />
        <button className="ui button">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
