import React, { Fragment } from "react";
import { SearchInput } from "..";
import avatar from "../../assets/img/avatar.png";
import { A } from "hookrouter";
import { removeItemLS } from "../../hooks/LocalStorage";

const Header = ({ simple }) => {
  let simpleMenu = (
    <Fragment>
      <div className="heading-logo">
        <A href="/">
          <h1
            className={`heading heading-logo ${!simple && "heading-logo--sm"} `}
          >
            movia
          </h1>
        </A>
      </div>
    </Fragment>
  );

  let LoggedMenu = (
    <Fragment>
      <nav className="nav">
      
          <div class="nav__dropdown">
            <span class="nav__dropbtn">Browse</span>
            <div class="nav__dropdown-content">
              <A href="/home" className="nav__item">
                Home
              </A>
              <A href="/search" className="nav__item">
                Peliculas
              </A>
              <A href="/search" className="nav__item">
                Peliculas
              </A>
            </div>
      
        </div>
      </nav>
      <SearchInput />
      <div className="header__profile">
        <div class="dropdown">
          <A href="/" className="dropbtn header__item">
            <img className="header__photo" src={avatar} alt="" />
          </A>
          <div class="dropdown-content">
            <A
              href="/"
              className="nav__item"
              onClick={() => removeItemLS("user")}
            >
              Logout
            </A>
          </div>
        </div>
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
