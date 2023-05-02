// import React from "react";
import { FaSearch } from "react-icons/fa";
// import "./style.css";
import "./Search.css"

const SearchBar = () => {
  return (
    <div className="search-container">
      <form action="#">
        <input type="text" placeholder="Search Twitter" />
        <button type="submit">
          <FaSearch color="white" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
