import React from 'react';

const Search = ({search}) => {
  return <div className = "search">
      <button onClick={search}>Search New Dogs</button>
  </div>;
};

export default Search;
