import React, { Fragment } from "react";
import { SearchInput } from "..";
import avatar from "../../assets/img/avatar.png";
import { A } from "hookrouter";

const Header = ({ simple }) => {

  let simpleMenu = (
    <Fragment>
      <div className={`heading-logo ${!simple && "heading-logo--sm"}`}>
        <A href="/">
          <h1 className="heading heading-logo">movia</h1>
        </A>
      </div>
    </Fragment>
  );

  let LoggedMenu = (
    <Fragment>
      <nav className="nav">
        <div className="nav__options">
          <A href="/home" className="nav__item">
            Peliculas
          </A>
          <A href="/home" className="nav__item">
            Watchlist
          </A>
        </div>
      </nav>
      <SearchInput />
      <div className="header__profile">
        <A href="/" className="header__item">
          <img className="header__photo" src={avatar} alt="" />
        </A>
      </div>
    </Fragment>
  );

  return (
    <header className={`u-padding-grid header ${!simple && "header--bg"}`}>
      {simpleMenu}
      {!simple && LoggedMenu}
    </header>
  );
};

export default Header;
