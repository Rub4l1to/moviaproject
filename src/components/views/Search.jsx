import React, { Fragment, useEffect } from "react";
import { Header } from "..";

const Search = ({ setLogin }) => {
  useEffect(() => {
    setLogin(true);
  }, []);

  

  return <Fragment>Search</Fragment>;
};

export default Search;
