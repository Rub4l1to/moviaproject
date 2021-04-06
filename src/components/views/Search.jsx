import React, { Fragment, useEffect, useState } from "react";
import { Film } from "..";

const Search = ({ films, param }) => {
  const [filmsSearch, setFilms] = useState([]);

  useEffect(() => {
    checkParam();
  }, [param]);

  const checkParam = () => {
    let data = films.filter((element) =>
      element.Title.toUpperCase()
        .split(" ")
        .join("")
        .includes(param.toUpperCase().split("%20").join(""))
    );

    // Cargar peliculas filmsSearch
    setFilms(data);
  };

  return (
    <Fragment>
      <section className="u-padding-grid  section-titles">
        <p className="heading--search">Movies related to:</p>
        <div>
          {filmsSearch.length !== 0 &&
            filmsSearch.map((element, key) => (
              <Fragment>
                <span className="section-titles__related" key={key}>
                  {element.Title}
                  <span className="section-titles__line"> | </span>
                </span>
              </Fragment>
            ))}
        </div>
      </section>
      <section className="u-padding-grid u-margin-top-medium section-list">
        {filmsSearch.length === 0 ? (
          <h2>No hay resultados</h2>
        ) : (
          filmsSearch.map((element, key) => (
            <div className="section-list__item" key={key}>
              <Film {...{ element }} />
            </div>
          ))
        )}
      </section>
    </Fragment>
  );
};

export default Search;
