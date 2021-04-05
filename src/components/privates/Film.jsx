import React, { Fragment, useEffect, useState } from "react";

// Components
import { Card, Modal } from "..";
import { removeFav } from "../../hooks/Films";
import { addItemLS, getItemLS } from "../../hooks/LocalStorage";

// Middlewares
import cleanUrl from "../../middleware/CleanURL";
import { favFilmExists } from "../../middleware/FavFilmExist";

const Film = ({ el, favFilms }) => {
  const { Id, Poster } = el;

  const [modal, showModal] = useState(false);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (favFilms) setFav(true);
  }, [fav]);

  const handleFav = async () => {
    // Check if exists
    const existsFilm = await favFilmExists(Id);

    if (!existsFilm) {
      const favs = await getItemLS("favs");
      addItemLS("favs", [...favs, el]);
      setFav(!fav);
    }
  };

  const handleDeleteFav = async () => {
    // Check if exists
    const existsFilm = await favFilmExists(Id);

    if (existsFilm) {
      await removeFav(Id);
      setFav(!fav);
    }
  };

  return (
    <Fragment>
      <Card
        {...{
          poster: cleanUrl(Poster),
          showModal,
          handleFav,
          handleDeleteFav,
          fav,
          setFav,
        }}
      />
      {modal && (
        <Modal {...{ el, modal, showModal, handleFav, handleDeleteFav, fav }} />
      )}
    </Fragment>
  );
};

export default Film;
