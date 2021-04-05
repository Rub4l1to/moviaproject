import React, { Fragment, useCallback, useEffect, useState } from "react";

// Images
import bg from "../../assets/img/cartelera.jpg";

// Icons
import { FaPlayCircle, FaPlus, FaStar } from "react-icons/fa";

// Routing
import { A } from "hookrouter";
import { navigate } from "hookrouter";

// Components
import { Slider, Footer } from "..";

const Home = ({ setLogin, films }) => {
  const [watchlist, updateWatchlist] = useState([]);

  if (!localStorage.getItem("user")) {
    navigate("/");
  }

  useEffect(() => {
    setLogin(false)
    setInterval(() => {
      updateWatchlist(JSON.parse(localStorage.getItem("favs")) || [])
    }, 100);
  }, []);

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

      {watchlist.length > 0 && (
        <section className="u-margin-top-medium u-padding-grid">
          <div className="section-pictures__title-container">
            <h2 className="heading heading-title">Watchlist</h2>
          </div>
          <Slider {...{ films: watchlist, favFilms: true }} />
        </section>
      )}

      {films && (
        <section className="section-films u-margin-top-medium u-padding-grid">
          <div className="section-pictures__title-container">
            <h2 className="heading heading-title">Popular</h2>
          </div>
          <Slider {...{ films }} />
        </section>
      )}

      <Footer />
    </Fragment>
  );
};

export default Home;

// {watchlist.length > 0 && section_watchlist}
// useEffect(() => {
//   localStorage.setItem("favs", JSON.stringify(watchlist));
//   console.log(watchlist);
// let data = localStorage.getItem("favs");
// if (data != null) {
//   updateWatchlist(JSON.parse(data));
// }
// }, [watchlist]);

// const loadNewData = () => {
//   let data = localStorage.getItem("favs");
//   if (data != null) {
//     updateWatchlist(JSON.parse(data));
//   }
// }
