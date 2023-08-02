import React from "react";
// import searchIcon from "../assets/img/search-icon.png";
import "../assets/css/SearchBar.css";

const SearchBar = ({ onChange }) => {
  return (
    <div className="search-container">
      <input
        className="input-search "
        type="text"
        placeholder="Buscar personajes..."
        onChange={(e) => onChange(e.target.value)}
      />
      {/* <img className="search-icon" src={searchIcon} alt="Buscar" /> */}
    </div>
  );
};

export default SearchBar;
