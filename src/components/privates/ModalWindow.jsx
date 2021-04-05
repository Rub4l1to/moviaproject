import React from "react";
import Modal from "react-modal";
import {
  FaPlayCircle,
  FaPlus,
  FaStar,
  FaTimes,
  FaTrashAlt,
} from "react-icons/fa";
import { A } from "hookrouter";
import cleanUrl from "../../middleware/CleanURL";

Modal.setAppElement("#main");

const ModalWindow = ({
  element,
  modal,
  showModal,
  handleFav,
  handleDeleteFav,
  fav,
}) => {
  const { Title, Poster, Language, Year, Released, Plot, Genre, Actors } = element;

  return (
    <Modal isOpen={modal} className="modal">
      <figure className="modal__jumbotron">
        <img className="modal__picture" src={cleanUrl(Poster)} alt="" />
      </figure>

      <div className="modal__close" onClick={() => showModal(false)}>
        <FaTimes />
      </div>

      <div className="modal__info u-margin-top-medium">
        <div className="details u-padding-grid">
        <h2 className="details__title--year">{Year}</h2>
          <h2 className="details__title">{Title}</h2>
          <div className="details__info">
            <div className="details__score">
              <FaStar />
              <span>7.7</span>
            </div>
            <div className="details__category">
              <span>{Genre}</span>
            </div>
          </div>
          <div className="details__description  u-margin-bottom-small">
            <p>{Plot}</p>
          </div>
          <div className="buttons--big buttons">
            <A className="btn btn--sm btn--blue" href="#">
              <FaPlayCircle />
              <span> Watch trailer</span>
            </A>
            <A
              className="btn btn--sm btn--transparent"
              href="#"
              onClick={fav ? handleDeleteFav : handleFav}
            >
              {fav ? <FaTrashAlt /> : <FaPlus />}
              <span>Watchlist</span>
            </A>
          </div>
        </div>

        <div className="modal__subInfo">
          <div className="modal__itemInfo">
            <h6 className="modal__subtitle">Reparto:</h6>
            <span>{Actors}</span>
          </div>
          <div className="modal__itemInfo">
            <h6 className="modal__subtitle">Idioma:</h6>
            <span>{Language}</span>
          </div>
          <div className="modal__itemInfo">
            <h6 className="modal__subtitle">Estreno:</h6>
            <span>{Released}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWindow;
