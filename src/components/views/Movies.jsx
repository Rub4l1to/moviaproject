import React, { Fragment } from "react";
import { Film } from "..";

const Movies = ({ films }) => {
  return (
    <Fragment>
      <section className="u-padding-grid u-margin-top-medium section-movies section-list">
        {films.map((element, key) => (
          <div className="section-list__item" key={key}>
            <Film {...{ element }} />
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Movies;
