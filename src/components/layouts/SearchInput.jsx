import React, { Fragment, useEffect, useState } from "react";

// Navigation
import { navigate } from "hookrouter";

// Icons
import { FaTimes, FaSearch } from "react-icons/fa";

const SeachInput = () => {
  const [expand, setExpand] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    
    if(localStorage.getItem('user')){
      if(search.length === 0) navigate(`/home`)
      if(search.length >= 1) navigate(`/search/${search}`)
    }
  }, [search])

  return (
    <div className={`searchInput ${expand && "searchInput--expand"}`}>
      <FaSearch
        onClick={() => setExpand(!expand)}
        className="searchInput__icon searchInput__icon--search"
      />
      {expand && (
        <Fragment>
          <input
            type="search"
            className="search__input"
            placeholder="Títulos, personas, géneros"
            onChange={(e) => setSearch(e.target.value)}
            value={search || ""}
          />
          {search && (
            <FaTimes
              onClick={() => setSearch("")}
              className="searchInput__icon searchInput__icon--times"
            />
          )}
        </Fragment>
      )}
    </div>
  );
};

export default SeachInput;
