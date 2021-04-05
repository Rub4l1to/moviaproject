import React from "react";

// Routing
import { A } from "hookrouter";

// Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="u-margin-top-medium footer u-padding-grid">
      <div className="footer__wrapper">
        <div className="footer__group">
          <h1 className="heading heading-logo heading-logo--sm">movia</h1>

          <p className="footer__paragraph">
            Movia es la plataforma líder mundial para que los amantes del cine
            compartan y visualicen películas y series.
          </p>

          <div className="icons-media ">
            <FaTwitter />
            <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
          </div>
        </div>
        <div className="footer__group">
          <h4 className="footer__title">Compañia</h4>
          <ul className="footer__links">
            <A className="footer__item" href="/">
              Zona de prensa
            </A>
            <A className="footer__item" href="/">
              Privacidad
            </A>
            <A className="footer__item" href="/">
              Avisos legales
            </A>
            <A className="footer__item" href="/">
              Trabaja con nosotros
            </A>
            <A className="footer__item" href="/">
              Contacto
            </A>
          </ul>
        </div>
        <div className="footer__group">
          <h4 className="footer__title">Enlaces</h4>
          <ul className="footer__links">
            <A className="footer__item" href="/">
              Series
            </A>
            <A className="footer__item" href="/">
              Peliculas
            </A>
            <A className="footer__item" href="/">
              Watchlist
            </A>
          </ul>
        </div>
        <div className="footer__group">
          <h4 className="footer__title">Suscribete</h4>
          <p className="footer__paragraph">
            Dejanos tu email y te mantedremos al día de todas la novedades.{" "}
          </p>
          <input className="input" placeholder="Email" />
          <div className="remember u-margin-top-small">
            <input id="c1" type="checkbox" />
            <label htmlFor="c1">Acepto la política de privacidad </label>
          </div>
          <div className="buttons buttons">
            <A className="btn btn--sm btn--blue" href="#">
              Suscribirse
            </A>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
