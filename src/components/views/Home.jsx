// import { navigate } from "hookrouter";
import React, { Fragment, useEffect, useState } from "react";

// Images
import bg from "../../assets/img/cartelera.jpg";
import { FaPlayCircle, FaPlus, FaStar } from "react-icons/fa";
import { A } from "hookrouter";
import { Slider } from "..";
import { navigate } from "hookrouter";
import { getItemLS } from "../../hooks/LocalStorage";

const Home = ({ setLogin, films }) => {
  const [watchlist, setWatchlist] = useState([]);
  
  if (getItemLS("user") === []) {
    navigate("/auth/login");
  }

  useEffect(() => {
    setLogin(false);
  }, []);

  const section_films = (
    <Fragment>
      <section className="section-films u-margin-top-medium u-padding-grid">
        <div className="section-pictures__title-container">
          <h2 className="heading heading-title">Popular</h2>
        </div>
        <Slider {...{ films }} />
      </section>
    </Fragment>
  );

  const section_watchlist = (
    <Fragment>
      <section className="u-margin-top-medium u-padding-grid">
        <div className="section-pictures__title-container">
          <h2 className="heading heading-title">Watchlist</h2>
        </div>
        <Slider />
      </section>
    </Fragment>
  );

  return (
    <Fragment>
      <section className="section-home">
        <figure className="section-home__picture">
          <img src={bg} alt="" />
        </figure>
        <article className="section-home__info">
          <div className="details u-padding-grid">
            <h2 className="details__title">You</h2>
            <div className="details__info">
              <div className="details__score">
                <FaStar />
                <span>7.7</span>
              </div>
              <div className="details__category">
                <span>Crime, Drama, Romance, Thriller</span>
              </div>
            </div>
            <div className="details__description  u-margin-bottom-small">
              <p>
                A dangerously charming, intensely obsessive young man goes to
                extreme measures to insert himself into the lives of those he is
                transfixed by.
              </p>
            </div>
            <div className="buttons ">
              <A className="btn btn--sm btn--blue" href="#">
                <FaPlayCircle />
                <span> Watch trailer</span>
              </A>
              <A className="btn btn--sm btn--transparent" href="#">
                <FaPlus />
                <span>Watchlist</span>
              </A>
            </div>
          </div>
        </article>
      </section>

      {films && section_films}
    </Fragment>
  );
};

export default Home;

// {watchlist && section_watchlist}
