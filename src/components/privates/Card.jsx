import React, { useEffect } from "react";
import { FaEye, FaPlus, FaTrashAlt } from "react-icons/fa";

const Card = ({ poster, showModal, handleFav, handleDeleteFav, fav }) => {

  return (
    <div className="card">
      <img className="card__billboard" src={poster} alt="" />
      <div className="card__interactions">
        <div className="card__icons">
          {fav ? (
            <FaTrashAlt onClick={handleDeleteFav} />
          ) : (
            <FaPlus onClick={handleFav} />
          )}
          <FaEye onClick={() => showModal(true)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
