import React from "react";

const Search = ({ search }) => {
  return (
    <div className="search" data-testid="button">
      <button onClick={search}>Search New Dogs</button>
    </div>
  );
};

export default Search;
