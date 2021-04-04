import { useRoutes } from "hookrouter";
import React, { Fragment, useEffect } from "react";

import { Login, Register } from "../";

const routes = {
  "/": () => <Login />,
  "/register": () => <Register />,
  "/login": () => <Login />,
};

const Auth = ({ setLogin }) => {
  const routeResult = useRoutes(routes);

  useEffect(() => setLogin(true), []);

  return (
    <Fragment>
      <section className="section-auth">
        <div className="section-auth__form u-padding-grid"> {routeResult}</div>
        <div className="section-auth__picture"></div>
      </section>
    </Fragment>
  );
};

export default Auth;
