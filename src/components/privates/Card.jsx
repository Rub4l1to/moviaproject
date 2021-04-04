import React from "react";
import { FaEye, FaPlus } from "react-icons/fa";

const Card = ({ poster, showModal }) => {
  return (
    <div className="card">
      <img className="card__billboard" src={poster} alt="" />
      <div className="card__interactions">
        <div className="card__icons">
          <FaPlus />
          <FaEye onClick={() => showModal(true)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
// {fav ? <FaTrashAlt /> : <FaPlus onClick={handleFilm} />}
