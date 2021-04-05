import React, { Fragment, useEffect, useState } from "react";

// Routing
import { navigate } from "hookrouter";

// Components
import { Slider, Footer, Hero, Search } from "..";

const Home = ({ setLogin, films, param }) => {
  const [watchlist, updateWatchlist] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );

  if (!localStorage.getItem("user")) {
    navigate("/");
  }

  useEffect(() => {
    setLogin(false);
    setInterval(
      () => updateWatchlist(JSON.parse(localStorage.getItem("favs")) || []),
      100
    );
  }, []);

  return (
    <Fragment>
      {param ? (
        <Search {...{ films, param }} />
      ) : (
        <Fragment>
          <Hero />

          {watchlist.length > 0 && (
            <section className="section-films u-margin-top-medium u-padding-grid">
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
        </Fragment>
      )}

      <Footer />
    </Fragment>
  );
};

export default Home;
