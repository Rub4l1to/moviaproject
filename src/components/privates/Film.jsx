import React, { Fragment, useState } from "react";

// Components
import { Card, Modal } from "..";

// Middlewares
import cleanUrl from "../../middleware/CleanURL";

const Film = ({ el }) => {
  const { Poster } = el;

  const [modal, showModal] = useState(false);

  return (
    <Fragment>
      <Card {...{ poster: cleanUrl(Poster), showModal }} />
      {modal && <Modal {...{ el, modal, showModal }} />}
    </Fragment>
  );
};

export default Film;
