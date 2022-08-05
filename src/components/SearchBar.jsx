import React from "react";
import "../css/SearchBar.css";

function SearchBar({searchTerm, setSearchTerm, search }) {

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="ui action left icon input ui-c">
        <i className="search icon"></i>
        <input
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
