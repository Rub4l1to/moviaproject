import { navigate } from "hookrouter";
import { useRoutes } from "hookrouter";
import React, { Fragment, useEffect } from "react";

import { Header, Login, Register } from "../";
import { getItemLS } from "../../hooks/LocalStorage";

const routes = {
  "/": () => <Login />,
  "/register": () => <Register />,
  "/login": () => <Login />,
};

const Auth = () => {
  const routeResult = useRoutes(routes);

  useEffect(() => {
    if (getItemLS("user")) {
      navigate("/home");
    }
  }, []);

  return (
    <Fragment>
      <Header {...{ simple: true }} />
      <section className="section-auth">
        <div className="section-auth__form u-padding-grid"> {routeResult}</div>
        <div className="section-auth__picture"></div>
      </section>
    </Fragment>
  );
};

export default Auth;
