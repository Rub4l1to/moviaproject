import React, { Fragment, useEffect } from "react";

const Search = ({ setLogin }) => {
  useEffect(() => setLogin(false), []);

  return <Fragment>Search</Fragment>;
};

export default Search;
