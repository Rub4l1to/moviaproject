import React from "react";

// Images
import bg from "../../assets/img/cartelera.jpg";

// Icons
import { FaPlayCircle, FaPlus, FaStar } from "react-icons/fa";

// Routing
import { A } from "hookrouter";

const Hero = () => {
  return (
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
  );
};

export default Hero;
